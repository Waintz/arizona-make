import { NextFunction, Request, Response } from "express";
import { ApiError } from "../exceptions/api.error";

export const internalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const internalSecret = req.headers['x-internal-secret'];

    if (!internalSecret || internalSecret !== process.env.INTERNAL_BOT_SECRET) {
      return next(ApiError.Forbidden("Доступ разрешен только для внутренних сервисов"));
    }

    next();

  } catch (error) {
    return next(ApiError.Forbidden("Ошибка проверки безопасности"));
  }
}