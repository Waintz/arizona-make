import { NextFunction, Request, Response } from "express";
import { withdrawalService } from "../service/withdrawal.service";
import { Prisma } from "../generated/client";
import { parseFieldsToPrisma } from "../utils/prisma-select.utils";

export const withdrawalController = {
  async createRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, amount, requisites } = req.body;

      const result = await withdrawalService.createWithdrawalRequest({
        userId,
        amount,
        requisites,
      });

      console.log("Withdrawal request created:", result);

      res.status(200).json({
        success: true,
        message: "Withdrawal request created successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  async getRequests(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, telegramId, page = 1, limit = 6, id, fields } = req.query;

      console.log("fields in back", fields);

      let selectObject = undefined;

      if (fields && typeof fields === "string") {
        const fieldList = fields.split(",").map((f) => f.trim());

        selectObject = parseFieldsToPrisma(fieldList);
      } else {
        selectObject = {
          id: true,
          amount: true,
          status: true,
          created_at: true,
        };
      }

      const argumentsForRequests = {
        id: id ? Number(id) : undefined,
        limit: Number(limit),
        page: Number(page),
        identifier: {
          telegramId: telegramId ? Number(telegramId) : undefined,
          userId: userId ? String(userId) : undefined,
        },
        select: selectObject,
      };

      console.log(argumentsForRequests);

      let result = await withdrawalService.getWithdrawalRequests(
        argumentsForRequests
      );

      return res.status(200).json({
        success: true,
        message: "Success",
        withdrawals: result?.requests,
        total: result?.meta.total,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  async updateRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      if (Object.keys(updateData).length === 0) {
        return res
          .status(400)
          .json({ success: false, message: "No data provided to update" });
      }

      const result = await withdrawalService.updateWithdrawalRequests(
        Number(id),
        updateData
      );

      res.status(200).json({
        success: true,
        message: "Withdrawal updated successfully",
        data: result,
      });
    } catch (error) {
      console.error("updateRequest", error);
      next(error);
    }
  },

  async approveRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const approved = await withdrawalService.approveWithdrawalRequest(
        Number(id)
      );
      res.status(200).json({
        success: true,
        message: "Withdrawal approved successfully",
        data: approved,
      });
    } catch (error) {
      console.error("approveRequest", error);
      next(error);
    }
  },

  async rejectRequest(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { reason, adminComment } = req.body;

      const rejected = await withdrawalService.rejectWithdrawalRequest(
        Number(id),
        reason,
        adminComment
      );
      res.status(200).json({
        success: true,
        message: "Withdrawal rejected successfully",
        data: rejected,
      });
    } catch (error) {
      console.error("rejectRequest", error);
      next(error);
    }
  },
};
