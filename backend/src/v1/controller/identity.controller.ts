import { NextFunction, Request, Response } from "express";
import { identityService } from "../service/identity.service";
import { ApiError } from "../exceptions/api.error";

export const identityController = {
  async issueVerificationCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { telegramId } = req.body;

      if (!telegramId) {
        return res.status(400).json({
          success: false,
          message: "Не передан telegramId в теле запроса",
        });
      }

      const code = await identityService.createShortLivedCode(
        String(telegramId)
      );

      res.status(200).json({
        success: true,
        code,
      });
    } catch (error) {
      next(error);
    }
  },

  async confirmIdentity(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.body;

      const verify = await identityService.verifyCode(code);

      res.status(200).json({
        success: true,
        ...verify,
      });
    } catch (error) {
      next(error);
    }
  },

  async refresh(req: Request, res: Response, next: NextFunction) {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    try {
      const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

      console.log("пришел рефреш токен", refreshToken);

      if (!refreshToken) {
        return res.status(401).json({
          success: false,
          message: "Refresh токен обязателен для обновления сессии",
        });
      }

      const result = await identityService.refresh(refreshToken);

      res.cookie("refreshToken", result.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      return res.status(200).json({
        success: true,
        tokens: {
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
        },
        user: result.user,
      });
    } catch (error) {
      next(error);
    }
  },

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

      if (!refreshToken) {
        return res.status(200).json({ success: true, message: "Logged out" });
      }

      await identityService.logout(refreshToken);

      res.clearCookie("refreshToken");

      return res.status(200).json({
        success: true,
        message: "Сессия успешно завершена",
      });
    } catch (error) {
      next(error);
    }
  },

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.userId;

      if (!userId) {
        return next(ApiError.UnauthorizedError());
      }

      const userData = await identityService.getIdentityData(userId);

      return res.status(200).json({
        success: true,
        user: userData,
      });
    } catch (error) {
      next(error);
    }
  },
};
