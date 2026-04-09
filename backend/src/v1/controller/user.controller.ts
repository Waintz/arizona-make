import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiError } from "../exceptions/api.error";
import { userService } from "../service/user.service";
import { getSearchCriteria } from "../utils/request.utils";
import { telegramService } from "../service/telegram.service";
import { ensureString } from "../utils/type-guards";

export const userController = {
  async linkGameAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { code, nickname, server } = req.body;

      if (!code || !nickname || !server) {
        throw ApiError.BadRequest(
          "Не все данные переданы (code, nickname, server)"
        );
      }

      const result = await userService.linkGameAccount({
        code,
        nickname,
        server,
      });

      telegramService
        .notifyAccountLinked(
          Number(result.gameAccount.user_id),
          result.gameAccount.nickname
        )
        .catch((e) => console.error("Ошибка уведомления в ЛС", e));

      telegramService
        .sendRaceInvite(result.gameAccount.user.telegram_id.toString(), false)
        .catch((e) => console.error("Ошибка отправки инвайта", e));

      res.status(201).json({
        success: true,
        gameAccount: result.gameAccount,
      });
    } catch (error) {
      next(error);
    }
  },

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const criteria = getSearchCriteria(req);

      console.log("критерии", criteria);

      if (!criteria.userId && !criteria.telegramId) {
        return res.status(400).json({
          success: false,
          message:
            "Не передан идентификатор пользователя (id в пути или telegramId)",
        });
      }

      const user = await userService.getUser(criteria);

      res.status(200).json({
        success: true,
        user: user,
      });
    } catch (error) {
      next(error);
    }
  },

  async getUsersForBroadcast(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getUsersForBroadcast();

      res.status(200).json({
        success: true,
        users
      })
    } catch (error) {
      next(error);
    }
  },

  async isVip(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { telegramId } = req.query;

      let searchCriteria: { userId?: string; telegramId?: number } = {};

      if (id === "me") {
        if (!telegramId) {
          return res.status(400).json({
            success: false,
            message: "При использовании 'me' необходим telegramId в query",
          });
        }
        searchCriteria = { telegramId: Number(telegramId) };
      } else {
        searchCriteria = { userId: Array.isArray(id) ? id[0] : id };
      }

      const vip = await userService.isVip(searchCriteria);

      return res.status(200).json({
        success: true,
        ...vip,
        message: "Success",
      });
    } catch (error) {
      next(error);
    }
  },

  async getGameAcccount(req: Request, res: Response) {
    try {
      const { nickname, server } = req.params;

      if (!nickname || !server) {
        return res
          .status(400)
          .json({ error: "Не передан nickname или server" });
      }

      const gameAccount = await userService.getGameAccount(
        {
          nickname: ensureString(nickname),
          server: Number(server),
        },
        { races_won: true, user: false }
      );

      return res.status(200).json({
        success: true,
        gameAccount,
        message: "Success",
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  async getGameAcccounts(req: Request, res: Response, next: NextFunction) {
    try {
      const criteria = getSearchCriteria(req);

      console.log("вернулся айди", criteria);

      if (!criteria.userId && !criteria.telegramId) {
        return res.status(400).json({
          success: false,
          message:
            "Не передан идентификатор пользователя для получения аккаунтов",
        });
      }

      const accounts = await userService.getGameAccounts(criteria);

      res.status(200).json({
        success: true,
        gameAccounts: accounts || [],
        message: "Success",
      });
    } catch (error) {
      next(error);
    }
  },

  async unlinkedGameAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const { nickname, server } = req.params;

      if (!nickname || !server) {
        return res.status(400).json({
          success: false,
          message: "Не передан nickname или server в пути запроса",
        });
      }

      const result = await userService.unlinkedGameAccount({
        nickname: ensureString(nickname),
        server: Number(server),
      });

      return res.status(200).json({
        success: true,
        message: "Аккаунт успешно отвязан",
        result,
      });
    } catch (error) {
      next(error);
    }
  },

  async generationConnectCode(req: Request, res: Response, next: NextFunction) {
    try {
      const criteria = getSearchCriteria(req);

      if (!criteria.userId && !criteria.telegramId) {
        return res.status(400).json({
          success: false,
          message:
            "Не передан идентификатор пользователя (id в пути или telegramId)",
        });
      }

      const normalizedCriteria = {
        ...criteria,
        userId: criteria.userId ? String(criteria.userId) : undefined,
      };

      const userData = await userService.generationConnectCode(normalizedCriteria);

      res.status(200).json({
        success: true,
        userData: userData,
      });
    } catch (error) {
      next(error);
    }
  },

  async getUserSettings(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { telegramId } = req.query;

      let searchCriteria: { userId?: string; telegramId?: number } = {};

      if (id === "me") {
        if (!telegramId) {
          return res.status(400).json({
            success: false,
            message: "Для идентификатора 'me' необходим telegramId",
          });
        }
        searchCriteria = { telegramId: Number(telegramId) };
      } else {
        searchCriteria = { userId: Array.isArray(id) ? id[0] : id };
      }

      const userSettings = await userService.getUserSettings(searchCriteria);

      res.status(200).json({
        success: true,
        userSettings: userSettings,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },

  async updateUserSettings(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { settings, telegramId } = req.body;

      let searchCriteria: { userId?: string; telegramId?: number } = {};

      if (id === "me") {
        if (!telegramId) {
          return res.status(400).json({
            success: false,
            message:
              "Для обновления через 'me' необходим telegramId в теле запроса",
          });
        }
        searchCriteria = { telegramId: Number(telegramId) };
      } else {
        searchCriteria = { userId: Array.isArray(id) ? id[0] : id };
      }

      const updatedSettings = await userService.updateUserSettings(
        searchCriteria,
        settings
      );

      return res.status(200).json({
        success: true,
        message: "Settings updated successfully",
        updateUserSettings: updatedSettings,
      });
    } catch (error) {
      next(error);
    }
  },

  async registrationTelegram(req: Request, res: Response) {
    try {
      const { telegramId, username } = req.body;

      if (!telegramId) {
        return res.status(400).json({ error: "Не передан telegramId" });
      }

      const createAccount = await userService.registrationTelegram({
        telegramId,
        username,
      });

      return res
        .status(200)
        .json({ success: true, message: "Success", account: createAccount });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
