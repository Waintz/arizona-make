import { NextFunction, Request, Response } from "express";
import {
  CreateRaceDTO,
  FinishRaceDTO,
  GetLeaderBoardDTO,
  JoinRaceDTO,
} from "../schemas/race.schema";
import { raceService } from "../services/race.service";

export const raceController = {
  async createRace(req: Request, res: Response, next: NextFunction) {
    try {
      const { locationId, prizeType, prize, startAt } =
        req.body as unknown as CreateRaceDTO["body"];

      const race = await raceService.createRace({
        locationId: Number(locationId),
        prizeType: prizeType,
        prize: prize,
        startAt: new Date(startAt),
      });

      res.status(201).json(race);
    } catch (error) {
      next(error);
    }
  },

  async getActiveRaces(req: Request, res: Response, next: NextFunction) {
    try {
      const races = await raceService.getActiveRaces();

      res.status(200).json(races);
    } catch (error) {
      next(error);
    }
  },

  async restoreRoomsController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = req.user?.sub;

      if (!userId) {
        throw { status: 401, message: "Пользователь не авторизован" };
      }

      const result = await raceService.getMyActiveRooms(Number(userId));
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  async joinRace(req: Request, res: Response, next: NextFunction) {
    try {
      const { secretCode, gameId, server } = req.body as JoinRaceDTO["body"];
      const userId = Number(req.user?.sub);

      if (!userId) {
        throw { status: 401, message: "Пользователь не авторизован" };
      }

      const participation = await raceService.joinRace(userId, {
        secretCode,
        gameId,
        server,
      });

      res.status(201).json({
        message: "Вы успешно зарегистрированы на гонку",
        participation,
      });
    } catch (error) {
      next(error);
    }
  },

  async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const { raceId: id } =
        req.params as unknown as GetLeaderBoardDTO["params"];

      const raceId = Number(id);

      if (isNaN(raceId)) {
        throw { status: 400, message: "Некорректный ID гонки" };
      }

      const leaderboard = await raceService.getLeaderboard(raceId);

      res.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  },

  async getRace(req: Request, res: Response, next: NextFunction) {
    try {
      const { raceId: id } =
        req.params as unknown as GetLeaderBoardDTO["params"];
      const raceId = Number(id);

      if (isNaN(raceId)) {
        throw { status: 400, message: "Некорректный ID гонки" };
      }

      const race = await raceService.getRace(raceId);

      res.status(200).json(race);
    } catch (error) {
      next(error);
    }
  },

  async finishRace(req: Request, res: Response, next: NextFunction) {
    try {
      const { secretCode } = req.body as FinishRaceDTO["body"];
      const userId = Number(req.user?.sub);

      if (!userId) {
        throw { status: 401, message: "Пользователь не авторизован" };
      }

      const result = await raceService.finishRace(userId, secretCode);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
};
