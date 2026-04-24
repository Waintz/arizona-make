import { Request, Response, NextFunction } from "express";

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "Не авторизован" });
  }

  if (user.role !== "ADMIN") {
    return res.status(403).json({ message: "Доступ запрещен: требуется роль администратора" });
  }

  next();
};