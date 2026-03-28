import { prisma } from "../../database/db";
import { generateIdentityCode } from "../utils/utils";
import { TokenService } from "./token.service";

const tokenService = new TokenService();

export const identityService = {
  async createShortLivedCode(telegramId: string) {
    const code = generateIdentityCode();
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 3);

    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: {
          telegram_id: Number(telegramId),
        },
        select: {
          id: true,
        },
      });

      if (!user) {
        throw new Error(`Пользователь с telegramId ${telegramId} не найден`);
      }

      await prisma.verificationCodes.create({
        data: {
          code: code,
          type: "GAME_LOGIN",
          expires_at: expirationDate,
          user_id: user.id,
        },
      });

      return code;
    });
  },

  async verifyCode(code: string) {
    const verificationRecord = await prisma.verificationCodes.findFirst({
      where: {
        code,
      },
      include: {
        user: true,
      },
    });

    if (!verificationRecord) {
      throw new Error("Неверный код");
    }

    if (verificationRecord.expires_at < new Date()) {
      await prisma.verificationCodes.delete({
        where: { id: verificationRecord.id },
      });
      throw new Error("Срок действия кода истек");
    }

    return await prisma.$transaction(async (tx) => {
      const isVip = verificationRecord.user.vip_expires_at
        ? verificationRecord.user.vip_expires_at > new Date()
        : false;

      const tokens = tokenService.generateTokens({
        userId: verificationRecord.user_id,
        telegramId: Number(verificationRecord.user.telegram_id),
        isVip: isVip,
      });

      await tokenService.saveToken(
        verificationRecord.user_id,
        tokens.refreshToken,
        tx
      );

      await tx.verificationCodes.delete({
        where: { id: verificationRecord.id },
      });

      return {
        tokens,
        user: verificationRecord.user,
      };
    });
  },

  async refresh(refreshToken: string) {
    const userData = tokenService.validateRefreshToken(refreshToken);

    if (!userData) {
      await tokenService.removeToken(refreshToken).catch(() => {});
      throw new Error("Refresh token невалиден или истек");
    }

    return await prisma.$transaction(async (tx) => {
      const tokenData = await tx.tokens.findUnique({
        where: { refresh_token: refreshToken },
      });

      if (!tokenData) {
        throw new Error("Сессия не найдена или уже отозвана");
      }

      const user = await tx.user.findUnique({
        where: { id: userData.userId },
      });

      if (!user) {
        throw new Error("Пользователь больше не существует");
      }

      const isVip = user.vip_expires_at
        ? user.vip_expires_at > new Date()
        : false;

      const tokens = tokenService.generateTokens({
        userId: user.id,
        telegramId: Number(user.telegram_id),
        isVip: isVip,
      });

      await tokenService.saveToken(user.id, tokens.refreshToken, tx);

      return {
        ...tokens,
        user: user,
      };
    });
  },

  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);

    return token;
  },

  async getIdentityData(userId: number) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        game_accounts: true,
      },
    });

    if (!user) {
      throw new Error("Пользователь не найден");
    }

    const isVip = user.vip_expires_at
      ? new Date(user.vip_expires_at) > new Date()
      : false;

    return {
      id: user.id,
      telegramId: user.telegram_id,
      isVip: isVip,
      createdAt: user.created_at,
      gameAccounts: user.game_accounts
    };
  }
};
