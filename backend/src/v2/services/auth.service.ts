import { prisma } from "../../../database/db";
import { $Enums } from "../generated";
import { GenerateCodeDTO } from "../schemas/auth.schema";
import { TokenPayload } from "../types/auth.types";
import { TokenService } from "./token.service";

const tokenService = new TokenService();

export const authService = {
  /**
   * ГЕНЕРАЦИЯ КОДА (Вызывает ТГ-бот)
   * @param telegramId: number | string;
   */
  async generateCode(data: GenerateCodeDTO) {
    const tgId = BigInt(data.telegramId);

    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.verificationCodes.upsert({
      where: { telegram_id: tgId },
      update: { code, expires_at: expiresAt, type: "GAME_LOGIN" },
      create: {
        telegram_id: tgId,
        code,
        expires_at: expiresAt,
        type: "GAME_LOGIN",
      },
    });

    return code;
  },

  /**
   * ПРОВЕРКА КОДА (Вызывает Луа-скрипт при логине)
   */
  async verifyCode(
    code: string,
    type: $Enums.VerificationCodeType = "GAME_LOGIN"
  ) {
    const record = await prisma.verificationCodes.findUnique({
      where: {
        code,
        type,
      },
      include: {
        user: true,
      },
    });

    if (!record || new Date() > record.expires_at || record.type !== type) {
      return { verify: false };
    }

    await prisma.verificationCodes.delete({
      where: { id: record.id },
    });

    return {
      verify: true,
      user: record.user,
    };
  },

  /**
   * РЕФРЕШ ТОКЕН (Возвращает новые токены)
   */
  async refresh(refreshToken: string) {
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) return null;

    const user = await prisma.user.findUnique({
      where: { id: Number(userData.sub) },
    });

    if (!user || user.token_version !== userData.version) {
      return null;
    }

    const payload: TokenPayload = {
      sub: String(user.id),
      tgId: String(user.telegram_id),
      username: user.username || "",
      version: user.token_version,
    };

    const tokens = tokenService.generateTokens(payload);

    await tokenService.saveToken(user.id, tokens.refreshToken);

    return { ...tokens, user };
  },

  /**
   * ВЫЙТИ ИЗ АККАУНТА
   */
  async logout(refreshToken: string) {
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDb) return false;

    await tokenService.removeToken(refreshToken);

    return true;
  },

  /**
   * СБРОС ВСЕХ СЕССИЙ
   * Инвалидирует все выданные ранее токены за счет смены версии
   * Legacy , пока не нужно
   */
  async cleanAllSession(refreshToken: string) {
    const userData = tokenService.validateRefreshToken(refreshToken);
    if (!userData) return false;

    const userId = Number(userData.sub);

    // 1. Увеличиваем версию токена в БД
    // Теперь все старые токены (где старая версия) не пройдут проверку в refresh и миддлварах
    await prisma.user.update({
      where: { id: userId },
      data: {
        token_version: { increment: 1 },
      },
    });

    // 2. Чистим все рефреш-токены пользователя из таблицы Tokens
    await prisma.tokens.deleteMany({
      where: { user_id: userId },
    });

    return true;
  },
};
