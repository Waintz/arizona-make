import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { TokenService } from "../services/token.service";

const tokenService = new TokenService();

export const authController = {
  async generateCode(req: Request, res: Response) {
    try {
      const code = await authService.generateCode(req.body);

      res.status(201).json({code});
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async verifyCode(req: Request, res: Response) {
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
      console.error(error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  },

  async refresh(req: Request, res: Response) {
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
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  async logout(req: Request, res: Response) {
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
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};
