import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";
import { TokenService } from "../services/token.service";
import {
  GenerateCodeDTO,
  LogoutDTO,
  RefreshTokenDTO,
  VerifyCodeDTO,
} from "../schemas/auth.schema";
import { nextTick } from "node:process";

const tokenService = new TokenService();

export const authController = {
  async generateCode(
    req: Request<{}, {}, GenerateCodeDTO>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const code = await authService.generateCode(req.body);

      res.status(201).json({ code });
    } catch (error: any) {
      next(error);
    }
  },

  async verifyCode(req: Request<{}, {}, VerifyCodeDTO>, res: Response, next: NextFunction) {
    try {
      const { code } = req.body; // Достаем код из тела запроса

      if (!code) {
        return res.status(400).json({ message: "Код обязателен" });
      }

      const result = await authService.verifyCode(code);

      if (!result.verify || !result.user) {
        return res.status(401).json({
          message: "Неверный или просроченный код",
        });
      }

      const tokens = tokenService.generateTokens({
        sub: String(result.user.id),
        tgId: String(result.user.telegram_id),
        username: result.user.username || "",
        version: result.user.token_version,
      });

      await tokenService.saveToken(result.user.id, tokens.refreshToken);

      return res.status(200).json({
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        user: {
          id: result.user.id,
          username: result.user.username,
          reputation: result.user.reputation,
        },
      });
    } catch (error) {
      next(error)
    }
  },

  async refresh(req: Request<{}, {}, RefreshTokenDTO>, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({ message: "Refresh token is required" });
      }

      const result = await authService.refresh(refreshToken);

      if (!result) {
        return res
          .status(401)
          .json({ message: "Invalid or expired refresh token" });
      }

      return res.status(200).json({
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        user: result.user,
      });
    } catch (error) {
      next(error)
    }
  },

  async logout(req: Request<{}, {}, LogoutDTO>, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      const result = await authService.logout(refreshToken);

      if (!result) {
        return res
          .status(401)
          .json({ message: "Invalid or expired refresh token" });
      }

      return res.status(200).json({
        message: "Вы успешно вышли из аккаунта",
      });
    } catch (error) {
      next(error)
    }
  },
};
