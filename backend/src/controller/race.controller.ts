import { Request, Response } from "express";
import { userService } from "../service/user.service";
import { raceService } from "../service/race.service";
import { prisma } from "../../database/db";
import { activeRaceCache, updateRaceCache } from "../store/race.store";
import { telegramService } from "../service/telegram.service";
import { get_RACE_CHANNEL_ID, get_RACE_VIP_CHANNEL_ID } from "../types/constants";

export const raceController = {
  async raceStatus(req: Request, res: Response) {
    if (activeRaceCache && activeRaceCache.status === "STARTED") {
      return res.status(200).json({
        ...activeRaceCache,
        server_start_time: activeRaceCache.server_start_time
          ? activeRaceCache.server_start_time.getTime()
          : null,
        serverNow: Date.now(),
      });
    }
    return res.status(200).json({ status: "NO_RACE" });
  },

  async finishRace(req: Request, res: Response) {
    try {
      console.log(req.body);
      const { nickname, server_id, player_path, clientFinishTime } = req.body;

      if (!activeRaceCache || activeRaceCache.status !== "STARTED") {
        return res.status(400).json({ error: "Гонка уже закончилась." });
      }

      const { gameAccount } = await userService.getGameAccount(
        { nickname, server: server_id },
        { user: true }
      );

      if (!gameAccount) {
        console.log("я не нашел");
        return res
          .status(404)
          .json({ error: "Аккаунт не найден или не привязан к боту" });
      }

      const participant = await prisma.raceParticipant.findUnique({
        where: {
          race_id_game_account_id: {
            race_id: activeRaceCache.id,
            game_account_id: gameAccount.id,
          },
        },
      });

      if (!participant) {
        return res
          .status(403)
          .json({ error: "Вы не зарегистрированы в этой гонке" });
      }

      if (participant.finished) {
        return res.status(400).json({ error: "Вы уже финишировали" });
      }

      const now = Date.now();

      const startTime = new Date(activeRaceCache.server_start_time).getTime();
      const raceDuration = now - startTime;

      if (raceDuration < 15000) {
        console.warn(`[ANTICHEAT] ${nickname} Too fast: ${raceDuration}ms`);

        await prisma.raceParticipant.update({
          where: { id: participant.id },
          data: {
            is_disqualified: true,
            suspicion_reason: `Too fast (${raceDuration}ms)`,
          },
        });

        return res.json({
          success: true,
          message: "Результат на проверке администрации",
        });
      }

      const pointsCount = await prisma.raceTelemetry.count({
        where: { participant_id: participant.id },
      });

      if (pointsCount < 30) {
        console.log(
          `[ANTICHEAT] ${nickname} No telemetry: ${pointsCount} points`
        );

        await prisma.raceParticipant.update({
          where: { id: participant.id },
          data: {
            is_disqualified: true,
            suspicion_reason: `Teleport? Points: ${pointsCount}`,
          },
        });

        return res.json({
          success: true,
          message: "Результат на проверке (мало данных)",
        });
      }

      await prisma.raceParticipant.update({
        where: { id: participant.id },
        data: {
          finished: true,
          server_finish_at: new Date(),
          client_time_ms: Number(clientFinishTime) || 0,
        },
      });

      const currentRace = await prisma.race.findUnique({
        where: { id: activeRaceCache.id },
      });

      if (!currentRace?.winner_id) {
        const finalPrize =
          gameAccount.user.vip_expires_at &&
          gameAccount.user.vip_expires_at > new Date()
            ? `${activeRaceCache.prize * 2} x2 выигрыш (VIP)`
            : activeRaceCache.prize;

        await prisma.race.update({
          where: { id: currentRace?.id },
          data: {
            status: "FINISHED",
            winner_id: gameAccount.id,
            winner_path: player_path,
          },
        });

        const CHANNEL_ID = activeRaceCache.is_vip
          ? get_RACE_VIP_CHANNEL_ID()
          : get_RACE_CHANNEL_ID();
        await telegramService.notifyRaceWinner(CHANNEL_ID, {
          prize: String(finalPrize),
          nickname: gameAccount.nickname,
          server: gameAccount.server,
        });

        updateRaceCache(null);

        return res.json({ success: true, prize: finalPrize, position: 1 });
      }

      return res.json({
        success: true,
        position: "2+",
        message: "Вы финишировали!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
  },

  async forceStart(req: Request, res: Response) {
    try {
      const { prize, location_id, status, start_at, secret_code, is_vip } =
        req.body;

      if (
        !prize ||
        !location_id ||
        !start_at ||
        !status ||
        !secret_code ||
        typeof is_vip != "boolean"
      ) {
        return res.status(400).json({ error: "Не переданы все параметры" });
      }

      const forceStart = await raceService.forceStart({
        is_vip,
        location_id,
        prize,
        secret_code,
        start_at,
        status,
      });

      return res.status(200).json({
        success: true,
        message: "Race created",
        race: forceStart,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  async joinRace(req: Request, res: Response) {
    console.log(req.body);
    const { secretCode, nickname, server_id } = req.body;

    try {
      const race = await raceService.getRace({
        include: { location: true },
        secretCode: secretCode,
      });

      if (!race) {
        return res
          .status(404)
          .json({ error: "Гонка с таким кодом не найдена" });
      }
      if (race.status !== "WAITING") {
        return res
          .status(400)
          .json({ error: "Регистрация на гонку уже закрыта" });
      }

      const account = await userService.getGameAccount(
        { nickname: nickname, server: server_id },
        {}
      );

      if (!account.gameAccount) {
        return res
          .status(403)
          .json({ error: "Твой аккаунт не привязан к боту!" });
      }

      const existingParticipant = await raceService.getRaceParticipant({
        raceId: race.id,
        gameAccountId: account.gameAccount.id,
      });

      if (existingParticipant) {
        return res.status(400).json({ error: "Ты уже в списке участников!" });
      }

      await raceService.createRaceParticipant({
        gameAccountId: account.gameAccount.id,
        raceId: race.id,
      });

      return res.json({
        success: true,
        message: "Ты зарегистрирован!",
        raceId: race.id,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  },

  async saveTelemetry(req: Request, res: Response) {
    const { raceId, telemetry, suspects, nickname, serverId } = req.body;

    console.log(suspects);

    if (!telemetry || telemetry.length === 0) {
      return res.json({ status: "ok" });
    }

    try {
      const account = await userService.getGameAccount(
        { nickname, server: serverId },
        {}
      );

      if (!account.gameAccount?.id) {
        return res.json({ status: "ok" });
      }

      const participant = await raceService.getLastRaceParticipant({
        gameAccountId: account.gameAccount?.id,
        raceId,
      });

      if (!participant) return res.status(403).send("Not participant");

      const records = telemetry.map(
        (p: { x: number; y: number; z: number; v: number; t: number }) => ({
          participant_id: participant.id,
          x: p.x,
          y: p.y,
          z: p.z,
          speed: p.v,
          client_timestamp: p.t,
        })
      );

      await raceService.addRaceTelemtry(records);

      const recordsSuspects = suspects.map((human: string) => ({
        race_id: raceId,
        observer_id: account.gameAccount?.id,
        suspect_nickname: human,
        suspect_server: account.gameAccount?.server,
        server_time: new Date(),
      }));

      const test = await raceService.addSuspects(recordsSuspects);

      console.log(test);

      return res.json({ status: "saved" });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error");
    }
  },

  async getRacePaths(req: Request, res: Response) {
    const { limit, page } = req.query;

    try {
      const data = await raceService.getPlayerPaths(
        Number(page) || 1,
        Number(limit) || 6
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  },

  async getRacePath(req: Request, res: Response) {
    const { raceId } = req.params;

    if (!raceId) {
      return res.status(400).json({ error: "Не передан raceId" });
    }

    try {
      const data = await raceService.getPlayerPath(Number(raceId));
      return res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  },
};
