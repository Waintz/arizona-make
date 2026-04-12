import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import { CreateUserDTO } from "../schemas/user.schema";

export const userController = {
  async createUser(
    req: Request<{}, {}, CreateUserDTO>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await userService.register(req.body);

      res.status(201).json(user);
    } catch (error: any) {
      next(error);
    }
  },

  async getMe(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req.user;

      if (!userData) {
        return res.status(401).json({ message: "Пользователь не найден" });
      }

      const userId = Number(userData.sub);

      const user = await userService.getUserById(userId);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
};
