import { prisma } from "../../database/db";
import { ApiError } from "../exceptions/api.error";
import { Prisma, RaceStatus } from "../generated/client";

export const raceService = {
  async finishRace({
    raceId,
    gameAccountId,
    userId,
    prize,
    secret_code,
    winner_path,
  }: {
    raceId: number;
    gameAccountId: number;
    userId: number;
    prize: number;
    secret_code: string;
    winner_path: Prisma.JsonArray;
  }) {
    try {
      const race = await prisma.$transaction(async (tx: any) => {
        const currentRace = await tx.race.findUnique({
          where: { id: raceId },
        });

        if (currentRace?.status !== "STARTED") {
          throw new Error("Гонка уже завершена кем-то другим!");
        }

        await tx.gameAccount.update({
          where: { id: gameAccountId },
          data: { wins: { increment: 1 } },
        });

        await tx.user.update({
          where: { id: userId },
          data: { balance: { increment: Number(prize) } },
        });

        return await tx.race.update({
          where: { id: raceId },
          data: {
            status: "FINISHED",
            winner_id: gameAccountId,
            secret_code: secret_code,
            winner_path: winner_path,
          },
        });
      });

      return race;
    } catch (error) {
      throw ApiError.BadRequest("Произошла непридвиденная ошибка.", error);
    }
  },

  async forceStart(data: {
    prize: string;
    location_id: number;
    status: RaceStatus;
    start_at: Date;
    secret_code: string;
    is_vip: boolean;
  }) {
    const race = await prisma.race.create({
      data: {
        prize: data.prize,
        location_id: data.location_id,
        status: data.status,
        secret_code: data.secret_code,
        start_at: data.start_at,
        is_vip: data.is_vip,
      },
    });

    return race;
  },

  async joinRace(user: { nickname: string; server: number }) {},

  async getRaceParticipant({
    raceId,
    gameAccountId,
  }: {
    raceId: number;
    gameAccountId: number;
  }) {
    const participant = await prisma.raceParticipant.findUnique({
      where: {
        race_id_game_account_id: {
          race_id: raceId,
          game_account_id: gameAccountId,
        },
      },
    });

    return participant;
  },

  async getLastRaceParticipant({
    raceId,
    gameAccountId,
  }: {
    raceId: number;
    gameAccountId: number;
  }) {
    const participant = await prisma.raceParticipant.findFirst({
      where: {
        race_id: Number(raceId),
        game_account_id: gameAccountId,
      },
    });

    return participant;
  },

  async createRaceParticipant({
    raceId,
    gameAccountId,
  }: {
    raceId: number;
    gameAccountId: number;
  }) {
    const participant = await prisma.raceParticipant.create({
      data: {
        race_id: raceId,
        game_account_id: gameAccountId,
      },
    });

    return participant;
  },

  async getRace({
    include,
    secretCode,
  }: {
    secretCode: string;
    include: Prisma.RaceInclude;
  }) {
    const race = await prisma.race.findUnique({
      where: { secret_code: secretCode },
      include,
    });

    return race;
  },

  async addRaceTelemtry(records: []) {
    const telemetry = await prisma.raceTelemetry.createMany({
      data: records,
    });

    return telemetry;
  },

  async addSuspects(records: []) {
    const suspects = await prisma.raceWitness.createMany({
      data: records,
    });

    return suspects;
  },

  async getPlayerPaths(page: number = 1, limit: number) {
    const skip = (page - 1) * limit;

    const [total, telemetryData] = await prisma.$transaction([
      prisma.race.count(),

      prisma.race.findMany({
        take: limit,
        skip: skip,
        orderBy: { start_at: "desc" },
        select: { start_at: true, id: true },
      }),
    ]);

    return { total, telemetryData };
  },
  async getPlayerPath(raceId: number) {
    const telemetryData = await prisma.race.findUnique({
      where: { id: raceId },
    });

    return { telemetryData };
  },
};
