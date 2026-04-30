import { prisma } from "../../../database/db";
import { raceQueue } from "../modules/race/queues/race.queue";
import { CreateRaceDTO } from "../schemas/race.schema";
import { RoomManager } from "../sockets/room.manager";
import { OutgoingPayload } from "../sockets/types/socket.types";
import { BettingService } from "./bet.service";
import { redis } from "./redis.service";

export const raceService = {
  async createRace({
    locationId,
    prize,
    prizeType,
    startAt,
    userId,
  }: CreateRaceDTO["body"] & { userId?: number }) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();

    const race = await prisma.race.create({
      data: {
        creator_id: userId ? userId : undefined,
        location_id: locationId,
        prize: prize,
        prize_type: prizeType,
        secret_code: code,
        start_at: startAt,
      },
    });

    return race;
  },
  async getActiveRaces() {
    const now = new Date();
    return await prisma.race.findMany({
      where: {
        start_at: { gt: now },
        status: "WAITING",
      },
      include: {
        location: true,
        _count: {
          select: { participants: true },
        },
      },
      orderBy: { start_at: "asc" },
    });
  },

  async getMyActiveRooms(userId: number) {
    const rooms = await redis.smembers(`user:${userId}:rooms`);

    return { rooms };
  },

  async joinRace(
    userId: number,
    data: { gameId: number; server: number; secretCode: string }
  ) {
    const account = await prisma.gameAccount.findUnique({
      where: {
        game_id_server: {
          game_id: data.gameId,
          server: data.server,
        },
      },
    });

    if (!account)
      throw new Error("Аккаунт не найден в системе. Привяжите его в боте.");
    if (account.user_id !== userId)
      throw new Error("Этот аккаунт принадлежит другому пользователю.");

    if (!account.is_main) {
      throw new Error(
        "Участвовать в гонках можно только с основного аккаунта!"
      );
    }

    const race = await prisma.race.findUnique({
      where: { secret_code: data.secretCode },
    });

    if (!race || race.status !== "WAITING") throw new Error("Гонка недоступна");

    return await prisma.raceParticipant.create({
      data: {
        race_id: race.id,
        user_id: userId,
        game_account_id: account.id,
      },
    });
  },

  async getLeaderboard(raceId: number) {
    const race = await prisma.race.findUnique({
      where: { id: raceId },
      select: { prize: true, prize_type: true, status: true },
    });

    if (!race) throw new Error("Гонка не найдена");

    const results = await prisma.raceParticipant.findMany({
      where: {
        race_id: raceId,
        finished: true,
        is_disqualified: false,
      },
      orderBy: {
        server_finish_at: "asc",
      },
      take: 50,
      include: {
        game_account: {
          select: {
            nickname: true,
            server: true,
          },
        },
        user: {
          select: {
            username: true,
          },
        },
      },
    });

    return {
      race_info: race,
      results: results.map((res, index) => ({
        position: index + 1,
        nickname: res.game_account.nickname,
        server: res.game_account.server,
        username: res.user.username,
        finish_time: res.server_finish_at,
      })),
    };
  },

  async getRace(raceId: number) {
    return await prisma.race.findUnique({
      where: { id: raceId },
      include: {
        _count: {
          select: { participants: true },
        },
        location: true,
        participants: {
          include: {
            game_account: {
              select: {
                nickname: true,
                server: true,
              },
            },
          },
        },
      },
    });
  },

  async finishRace(userId: number, secretCode: string) {
    const race = await prisma.race.findFirst({
      where: { secret_code: secretCode },
    });

    if (!race) throw new Error("Гонка не найдена");

    if (race.status !== "STARTED" && race.status !== "FINISHED") {
      throw new Error("Гонка недоступна для завершения");
    }

    const participant = await prisma.raceParticipant.findUnique({
      where: {
        race_id_user_id: {
          race_id: race.id,
          user_id: userId,
        },
      },
    });

    if (!participant) {
      throw new Error("Вы не являетесь участником этой гонки");
    }

    const redisKey = `race:finished:${secretCode}`;
    const addedCount = await redis.sadd(redisKey, String(userId));
    if (addedCount === 0) throw new Error("Вы уже финишировали");
    const position = await redis.scard(redisKey);
    const isWinner = position === 1;

    if (isWinner) {
      await prisma.$transaction(async (tx) => {
        const participant = await tx.raceParticipant.update({
          where: {
            race_id_user_id: {
              race_id: race.id,
              user_id: userId,
            },
          },
          data: {
            finished: true,
            position: position,
          },
        });

        await tx.race.update({
          where: {
            id: race.id,
          },
          data: {
            status: "FINISHED",
            winner_user_id: userId,
            winner_acc_id: participant.game_account_id,
          },
        });
      });

      console.log("Должна быть выдача приза, пока не реализовано.")

      await BettingService.distributeWinnings(race.id, participant.game_account_id);

      await raceQueue.add(
        "close-race",
        {
          secretCode: secretCode,
          eventType: "CLOSED",
          raceId: race.id,
        },
        { delay: 0.5 * 60 * 1000 }
      );
    } else {
      await prisma.raceParticipant.update({
        where: {
          race_id_user_id: {
            race_id: race.id,
            user_id: userId,
          },
        },
        data: {
          finished: true,
          position: position,
        },
      });
    }

    const payload: OutgoingPayload = {
      event: "race:player_finished",
      data: { userId, position, isWinner },
    };
    await RoomManager.broadcast(secretCode, payload);

    return { success: true, position, isWinner };
  },
};
