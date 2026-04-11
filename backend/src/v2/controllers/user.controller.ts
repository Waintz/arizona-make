import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.register(req.body);

      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getMe(req: Request, res: Response) {
    try {
      const userData = req.user;

      if (!userData) {
        return res.status(401).json({ message: "Пользователь не найден" });
      }

      const userId = Number(userData.sub);

      const user = await userService.getUserById(userId);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Ошибка при получении профиля." });
    }
  },
};
