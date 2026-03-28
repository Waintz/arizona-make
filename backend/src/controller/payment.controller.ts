import { paymentService } from "../service/payment.service";
import { Request, Response } from "express";
import { vipService } from "../service/vip.service";
import { userService } from "../service/user.service";
import { prisma } from "../../database/db";

export const paymentController = {
  async verifyPayment(req: Request, res: Response) {
    try {
      const { userId, telegramId } = req.body as {
        userId: number;
        telegramId: number;
      };

      if (!telegramId && !userId) {
        return res
          .status(400)
          .json({ error: "Не передан ни telegramId, ни userId" });
      }

      let targetUserId = userId;

      if (telegramId) {
        const user = await userService.getUser({ telegramId });

        if (!user) {
          return res
            .status(404)
            .json({ error: "Пользователь с таким Telegram ID не найден" });
        }

        targetUserId = user.id;
      }

      const pendingTransactionCodes =
        await paymentService.getPendingPaymentCodes(targetUserId);

      if (!pendingTransactionCodes || pendingTransactionCodes.length === 0) {
        return res
          .status(400)
          .json({ success: false, message: "No pending orders found" });
      }

      const checkResult = await paymentService.processLatestTransactions(
        pendingTransactionCodes
      );

      let specialCode = checkResult.comment;

      if (checkResult.status === "success" && checkResult.transaction) {
        const tx = checkResult.transaction;
        if (!tx.in_msg) {
          return res.status(400).json({
            success: false,
            message: "Invalid transaction data",
          });
        }
        const paidAmount = BigInt(tx.in_msg.value);

        const result = await prisma.$transaction(async (tx: any) => {
          const existingHash = await tx.transactions.findUnique({
            where: { hash: tx.in_msg.hash },
          });

          if (existingHash && existingHash.status == "SUCCESS") {
            return { status: "ALREADY_PROCESSED" };
          }

          const currentOrder = await tx.transactions.findUnique({
            where: { comment: specialCode },
          });

          if (currentOrder && currentOrder.status === "SUCCESS") {
            return { status: "ALREADY_PROCESSED" };
          }

          await tx.transactions.update({
            where: { comment: specialCode },
            data: {
              hash: tx.in_msg.hash,
              amount: paidAmount,
              status: "SUCCESS",
              updated_at: new Date(),
            },
          });

          await vipService.issueVip(targetUserId, 30);

          return { status: "OK" };
        });
        if (result.status === "ALREADY_PROCESSED") {
          return res.json({
            success: true,
            message: "Платеж уже был обработан ранее",
          });
        }

        return res.json({
          success: true,
          message: "VIP activated successfully",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Payment not found yet. Try again later.",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  async createPayment(req: Request, res: Response) {
    try {
      const { userId, telegramId, amount } = req.body;

      if (!telegramId && !userId) {
        return res
          .status(400)
          .json({ error: "Не передан ни telegramId, ни userId" });
      }

      let targetUserId = userId;

      if (telegramId) {
        const user = await userService.getUser({ telegramId });

        if (!user) {
          return res
            .status(404)
            .json({ error: "Пользователь с таким Telegram ID не найден" });
        }

        targetUserId = user.id;
      }

      const transaction = await paymentService.createPaymentIntent(
        targetUserId
      );

      return res.json({
        success: true,
        specialCode: transaction.comment,
        amount: transaction.amount.toString(),
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Error creating payment" });
    }
  },
};
