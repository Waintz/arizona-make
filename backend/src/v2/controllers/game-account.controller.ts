import { NextFunction, Request, Response } from "express";
import { gameAccountService } from "../services/game-account.service";
import { VerifyGameAccountDTO } from "../schemas/game-account.schema";
import { TokenService } from "../services/token.service";
const tokenService = new TokenService();

export const gameAccountController = {
  async verify(req: Request<{}, {}, VerifyGameAccountDTO>, res: Response, next: NextFunction) {
    try {
      const { account, user } = await gameAccountService.verifyGameAccount(
        req.body
      );

      const tokens = tokenService.generateTokens({
        sub: String(user.id),
        tgId: String(user.telegram_id),
        username: user.username || "",
        version: user.token_version,
      });

      await tokenService.saveToken(user.id, tokens.refreshToken);

      return res.status(201).json({
        message: "Аккаунт привязан и вход выполнен",
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        account,
        user: {
          id: user.id,
          telegram_id: String(user.telegram_id),
          username: user.username,
          reputation: user.reputation,
          balance: String(user.balance),
          points: String(user.points),
          vip_expires_at: user.vip_expires_at,
        },
      });
    } catch (error: any) {
      next(error);
    }
  },
};
