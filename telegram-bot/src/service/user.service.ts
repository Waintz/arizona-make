import { publicFetchRequest } from "../api/axios.instance";
import { UserSettings } from "../api/types/user.types";

export type SettingsQuery =
  | { userId: number | string; telegramId?: never }
  | { telegramId: number | bigint; userId?: never };

export const userService = {
  async registrationTelegram(user: { telegramId: number; username?: string }) {
    try {
      const account = await publicFetchRequest.post(`/users/registration`, {
        telegramId: user.telegramId,
        username: user.username,
      });

      return account.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getUser(query: SettingsQuery) {
    console.log("попал в гет юсер");
    try {
      const { userId, telegramId } = query;
      const resourceId = userId || "me";

      console.log("ресурс айди", resourceId);

      const response = await publicFetchRequest.get(`/users/${resourceId}`, {
        params: {
          telegramId,
        },
      });

      console.log("user", response.data);

      return response.data?.user || null;
    } catch (error) {
      // console.error(error);

      return null;
    }
  },

  async updateUserSettings(
    query: SettingsQuery,
    settings: Partial<UserSettings>
  ) {
    try {
      const { userId, telegramId } = query;
      const resourceId = userId || "me";

      const response = await publicFetchRequest.patch(
        `/users/${resourceId}/settings`,
        {
          telegramId,
          settings,
        }
      );

      return {
        success: true,
        data: response.data.updateUserSettings,
        status: response.status,
      };
    } catch (error) {
      console.error("Ошибка обновления настроек:", error);
      return { success: false, message: "Не удалось сохранить настройки" };
    }
  },

  async getUserSettings(identifier: SettingsQuery) {
    try {
      const { userId, telegramId } = identifier;
      const resourceId = userId || "me";

      const response = await publicFetchRequest.get(
        `/users/${resourceId}/settings`,
        {
          params: { telegramId },
        }
      );

      console.log("сделал запрос настроек", response.data.userSettings);

      return {
        success: true,
        data: response.data.userSettings,
      };
    } catch (error) {
      console.error("Ошибка при получении настроек:", error);
      return { success: false, message: "Ошибка сервера" };
    }
  },

  async generationConnectCode(identifier: SettingsQuery) {
    try {
      const { telegramId, userId } = identifier;

      const resourceId = userId || "me";

      const response = await publicFetchRequest.post(
        `/users/${resourceId}/connect-code`,
        { telegramId }
      );

      return {
        success: true,
        code: response.data.userData.connect_code,
      };
    } catch (error) {
      console.error("Ошибка генерации кода:", error);
      return { success: false, message: "Не удалось получить код" };
    }
  },

  async unlinkedGameAccount(user: { nickname: string; server: number }) {
    try {
      const unlink = await publicFetchRequest.delete(
        `/users/accounts/${user.nickname}/${user.server}`
      );

      return {
        status: unlink.status,
        data: unlink.data,
        success: true,
      };
    } catch (error) {
      console.error("Ошибка получения:", error);
      return { success: false, message: "Сервер недоступен" };
    }
  },

  async getAccounts(identifier: SettingsQuery) {
    try {
      const { userId, telegramId } = identifier;
      const resourceId = userId || "me";

      const response = await publicFetchRequest.get(
        `/users/${resourceId}/accounts`,
        {
          params: { telegramId },
        }
      );

      return {
        status: response.status,
        gameAccounts: response.data?.gameAccounts.gameAccounts || [],
        success: true,
      };
    } catch (error) {
      console.error("Ошибка получения аккаунтов в боте:", error);
      return { success: false, gameAccounts: [] };
    }
  },

  async getAccount(nickname: string, server: number) {
    try {
      const response = await publicFetchRequest.get(
        `/users/accounts/${encodeURIComponent(nickname)}/${server}`
      );

      return {
        status: response.status,
        data: response.data.gameAccount,
        success: true,
      };
    } catch (error) {
      console.error("Ошибка получения конкретного аккаунта:", error);
      return { success: false, message: "Сервер недоступен" };
    }
  },

  async isVip(query: SettingsQuery) {
    try {
      const { userId, telegramId } = query;

      const resourceId = userId || "me";

      const response = await publicFetchRequest.get(
        `/users/${resourceId}/vip`,
        {
          params: { telegramId },
        }
      );

      return {
        status: response.status,
        data: response.data,
        success: true,
      };
    } catch (error) {
      console.error("Ошибка получения:", error);
      return { success: false, message: "Сервер недоступен" };
    }
  },
};
