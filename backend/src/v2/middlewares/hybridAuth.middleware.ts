import { NextFunction, Request, Response } from "express";
import { TokenService } from "../services/token.service";
import { logger } from "../utils/logger";
import { prisma } from "../../../database/db";
import { TokenPayload } from "../types/auth.types";

const tokenService = new TokenService();

export const hybridAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const botToken = req.headers["x-internal-bot-token"];
    const internalSecret = process.env.INTERNAL_BOT_TOKEN;

    if (botToken) {
      if (botToken !== internalSecret) {
        logger.warn(
          {
            path: req.path,
            ip: req.ip,
            receivedToken: "PRESENT (mismatch)",
          },
          "Forbidden internal bot token attempt",
        );

        return res.status(401).json({
          error: "Unauthorized",
          message: "This endpoint is restricted to the internal bot service.",
        });
      }

      const telegramId = req.headers["x-telegram-id"] || req.body.telegramId;

      if (!telegramId) {
        logger.warn({ path: req.path }, "Bot request missing telegramId");
        return res
          .status(400)
          .json({ message: "Бот не передал telegramId пользователя" });
      }

      let tgIdBigInt: bigint;
      try {
        tgIdBigInt = BigInt(telegramId as string | number);
      } catch (e) {
        return res
          .status(400)
          .json({ message: "Некорректный формат telegramId" });
      }

      const user = await prisma.user.findFirst({
        where: { telegram_id: tgIdBigInt },
        select: {
          id: true,
          telegram_id: true,
          role: true,
          username: true,
          token_version: true,
        },
      });

      if (!user) {
        logger.warn(
          { path: req.path, telegramId },
          "User not found by telegramId",
        );
        return res
          .status(404)
          .json({ message: "Пользователь с таким Telegram ID не найден" });
      }

      req.user = {
        sub: String(user.id),
        tgId: String(user.telegram_id),
        role: user.role,
        username: user.username,
        version: user.token_version,
      } as TokenPayload;

      return next();
    }

    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: "Пользователь не авторизован" });
    }

    const accessToken = authorizationHeader.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ message: "Токен отсутствует" });
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      logger.warn({ path: req.path }, "Invalid or expired access token");
      return res
        .status(401)
        .json({ message: "Невалидный или просроченный токен" });
    }

    req.user = userData;
    return next();
  } catch (error) {
    logger.error({ err: error }, "Hybrid auth middleware internal error");
    next(error);
  }
};
