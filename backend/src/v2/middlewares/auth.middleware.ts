import { NextFunction, Request, Response } from "express";
import { TokenService } from "../services/token.service";
import { logger } from "../utils/logger";

const tokenService = new TokenService();

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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
      return res.status(401).json({ message: "Невалидный или просроченный токен" });
    }

    req.user = userData;
    next();
  } catch (error) {
    logger.error({ err: error }, "Auth middleware internal error");
    next(error); 
  }
};