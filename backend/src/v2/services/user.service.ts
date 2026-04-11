import { prisma } from "../../../database/db";
import { UserCreateOneZodSchema } from "../generated/zod/schemas/createOneUser.schema";
import z from "zod"

export interface CreateUserDTO {
  telegramId: number | string;
  username?: string;
}

export const userService = {
  async register(data: CreateUserDTO) {
    const tgId = BigInt(data.telegramId);

    return await prisma.user.upsert({
      where: {telegram_id: tgId},
      create: {
        telegram_id: tgId,
        username: data.username ?? `user_${tgId}`
      },
      update: {
        username: data.username
      }
    })
  },

  async getUsers(query?: { skip?: number; take?: number; search?: string }) {
    const { skip = 0, take = 10, search } = query || {};

    return await prisma.user.findMany({
      skip,
      take,
      where: search ? {
        OR: [
          { username: { contains: search, mode: 'insensitive' } },
        ]
      } : {},
      orderBy: { reputation: 'desc' }
    });
  },

  /**
   * Найти одного пользователя по ID (внутреннему)
   */
  async getUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        // Тут потом добавим связь с игровыми аккаунтами
        // GameAccounts: true 
      }
    });
  },

  /**
   * Найти по Telegram ID
   */
  async getUserByTgId(tgId: string | number) {
    return await prisma.user.findUnique({
      where: { telegram_id: BigInt(tgId) }
    });
  }
}