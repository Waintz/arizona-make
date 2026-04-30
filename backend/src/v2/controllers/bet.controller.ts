import { Request, Response, NextFunction } from "express";
import { BettingService } from "../services/bet.service";
import { TokenPayload } from "../types/auth.types";
import { PlaceBetDTO } from "../schemas/bet.schema";

export const betController = {
  async placeBet(req: Request, res: Response, next: NextFunction) {
    try {
      const { sub: userId } = req.user as TokenPayload;

      const { raceId, targetAccId, amount } = req.body as PlaceBetDTO;

      let amountBigInt: bigint;
      try {
        amountBigInt = BigInt(amount);
      } catch (error) {
        throw { status: 400, message: "Некорректный формат суммы ставки" };
      }

      const result = await BettingService.placeBet(
        Number(userId),
        raceId,
        targetAccId,
        amountBigInt,
      );

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },

  async getStats(req: Request, res: Response, next: NextFunction) {
    try {
      const { raceId } = req.params;
      const { targetAccId } = req.query;

      if (!raceId || isNaN(Number(raceId))) {
        throw { status: 400, message: "Некорректный или пустой raceId" };
      }

      const stats = await BettingService.getRaceBettingStats(
        Number(raceId),
        targetAccId ? Number(targetAccId) : undefined,
      );

      res.status(200).json(stats);
    } catch (error) {
      next(error);
    }
  },

  async rollbackBets(req: Request, res: Response, next: NextFunction) {
    try {
      const { raceId } = req.body;

      if (!raceId) {
        throw { status: 400, message: "Не указан raceId" };
      }

      const result = await BettingService.refundBets(Number(raceId));

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};
