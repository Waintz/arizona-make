import { Bot } from "grammy";
import { publicFetchRequest } from "../api/axios.instance";
import { bot } from "../../bot";

export const broadcastService = {
  async start(text: string, photoId?: string) {
    const response = await publicFetchRequest.get(
      "/users/internal/broadcast-list"
    );

    const users = response.data.users;

    for (const user of users) {
      try {
        const telegramId = user.telegramId;

        if (photoId) {
          await bot.api.sendPhoto(telegramId, photoId, {
            caption: text,
            parse_mode: "HTML",
          });
        } else {
          await bot.api.sendMessage(telegramId, text, {
            parse_mode: "HTML",
          });
        }

        await new Promise(resolve => setTimeout(resolve, 35));
        
      } catch (error: any) {
        console.error(`Ошибка при отправке пользователю ${user.telegramId}:`, error.description);
      }
    }
  },
};
