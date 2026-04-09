import { Prisma } from "../generated/client";
import { prisma } from "../../../database/db";
import { GetUserDto } from "./user.service";

export const withdrawalService = {
  async createWithdrawalRequest({
    userId,
    amount,
    requisites,
  }: {
    userId: number;
    amount: number;
    requisites: any;
  }) {
    const createRequest = await prisma.$transaction(async (tx: any) => {
      await tx.user.update({
        where: { id: userId },
        data: {
          balance: { decrement: amount },
          frozen_balance: { increment: amount },
        },
      });

      await tx.withdrawalRequest.create({
        data: {
          user_id: userId,
          wallet_address: requisites.walletAddress,
          currency: requisites.currency,
          amount: amount,
          status: "PENDING",
        },
      });
    });

    return createRequest;
  },

  async getWithdrawalRequests({
    id,
    limit,
    page,
    identifier,
    select = {
      id: true,
      status: true,
      created_at: true,
      admin_comment: true,
      amount: true,
      currency: true,
      processed_at: true,
      rejection_reason: true,
      tx_hash: true,
      updated_at: true,
      wallet_address: true,
      user_id: true,
    },
  }: {
    id?: number;
    limit?: number;
    page?: number;
    identifier?: GetUserDto;
    select?: Prisma.WithdrawalRequestSelect;
  }) {
    const safeLimit = limit ? (limit > 0 ? limit : 10) : 6;
    const safePage = page ? (page > 0 ? page : 1) : 1;
    const skip = (safePage - 1) * safeLimit;

    const where: Prisma.WithdrawalRequestWhereInput = {};

    if (id) {
      where.id = Number(id);
    }

    if (identifier?.userId) {
      where.user_id = Number(identifier.userId);
    } else if (identifier?.telegramId) {
      where.user = {
        telegram_id: identifier.telegramId,
      };
    }

    // сюда короче можно будет добавить select но пока без него
    const [requests, total] = await prisma.$transaction([
      prisma.withdrawalRequest.findMany({
        where,
        orderBy: {
          created_at: "desc",
        },
        take: limit,
        skip,
        select,
      }),
      prisma.withdrawalRequest.count({ where }),
    ]);

    return {
      requests,
      meta: { total, page, limit, totalPages: Math.ceil(total / safeLimit) },
    };
  },

  async updateWithdrawalRequests(
    id: number,
    updateData: Prisma.WithdrawalRequestUpdateInput
  ) {
    return await prisma.withdrawalRequest.update({
      where: { id },
      data: updateData,
    });
  },

  async approveWithdrawalRequest(id: number) {
    const request = await prisma.$transaction(async (tx: any) => {
      const updateStatus = await tx.withdrawalRequest.update({
        where: { id: id },
        data: {
          status: "APPROVED",
          processed_at: new Date(),
        },
      });

      const updateFrozenBalance = await tx.user.update({
        where: { id: updateStatus.user_id },
        data: {
          frozen_balance: { decrement: updateStatus.amount },
        },
      });

      return updateStatus;
    });

    return request;
  },

  async rejectWithdrawalRequest(
    id: number,
    reason?: string,
    adminComment?: string,
  ) {
    const request = await prisma.$transaction(async (tx: any) => {
      const updateWithdrawal = await tx.withdrawalRequest.update({
        where: { id: id },
        data: {
          status: "REJECTED",
          processed_at: new Date(),
          rejection_reason: reason,
          admin_comment: adminComment,
        },
      });

      const updateBalance = await tx.user.update({
        where: { id: updateWithdrawal.user_id },
        data: {
          balance: { increment: updateWithdrawal.amount },
          frozen_balance: { decrement: updateWithdrawal.amount },
        },
      })

      return updateWithdrawal;
    });

    return request;
  },
};
