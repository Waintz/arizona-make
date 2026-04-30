import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../database/db";
import { auctionService } from "../services/auction.service";
import { error } from "node:console";
import { CreateAuctionDTO, PlaceBidDTO } from "../schemas/auction.schema";
import { th } from "zod/v4/locales";

export class AuctionController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        title,
        targetType,
        targetId,
        startAt,
        endAt,
        minBidStep,
        openSlots,
        closedSlots,
        hasLuckySlot,
      } = req.body as CreateAuctionDTO["body"];

      const auction = await prisma.$transaction(async (tx) => {
        return auctionService.createAuction(tx, {
          title,
          targetType,
          targetId,
          startAt: new Date(startAt),
          endAt: new Date(endAt),
          minBidStep,
          openSlots,
          closedSlots,
          hasLuckySlot,
        });
      });

      res.status(201).json({
        auction,
      });

    } catch (error) {
      next(error)
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const auction = await prisma.auction.findUnique({
        where: { id },
        include: {
          slots: true,
        },
      });

      if (!auction) {
        throw { status: 404, message: "Auction not found" };
      }

      res.status(200).json({
        auction,
      });

    } catch (error) {
      next(error)
    }
  }

  static async placeBid(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.sub;
      const { auctionId, slotNumber, amount } = req.body as PlaceBidDTO["body"];

      if (!userId) {
        throw { status: 401, message: "Пользователь не авторизован" };
      }
      
      const bid = await auctionService.placeBid(
        Number(userId),
        Number(auctionId),
        Number(slotNumber),
        Number(amount)
      );

      res.status(201).json({
        bid,
      });

    } catch (error) {
      next(error)
    }
  }

  static async finalize(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const result = await auctionService.finalizeAuction(id);

      res.status(200).json({
        result,
      });

    } catch (error) {
      next(error)
    }
  }
}