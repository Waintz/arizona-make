import { bot } from "../../bot";
import { userService } from "./user.service";
import { MESSAGES } from "../resources/messages";

export const notifyService = {
  async raceAnnouncement(
    channel_id: number,
    data: { prize: string; delayMinutes: number; secretCode: string }
  ) {
    try {
      await bot.api.sendMessage(
        channel_id,
        `📢 <b>АНОНС ГОНКИ!</b>\n\n` +
          `🏆 Приз: <b>${data.prize}</b>\n` +
          `⏳ Старт через: <b>${data.delayMinutes} мин.</b>\n` +
          `🔐 Секретный ключ: <code>${data.secretCode}</code>\n` +
          `📍 Готовьтесь, локация появится здесь!`,
        { parse_mode: "HTML" }
      );
    } catch (error) {}
  },

  async raceWinner(
    channel_id: number,
    data: { prize: string; nickname: string; server: number }
  ) {
    try {
      await bot.api.sendMessage(
        channel_id,
        `🏁 <b>ГОНКА ЗАВЕРШЕНА!</b>\n\n` +
          `🥇 Победитель: <b>${data.nickname}</b>\n` +
          `💰 Приз: <b>${data.prize}</b>\n` +
          `🌍 Сервер: <b>${data.server}</b>\n\n` +
          `🎉 Поздравляем чемпиона! Ждите новых заездов!`,
        { parse_mode: "HTML" }
      );
    } catch (error) {
      console.error("Ошибка отправки уведомления о победе:", error);
    }
  },

  async sendGenerationConnectCode(telegramId: string | number) {
    try {
      const newConnectionCode = await userService.generationConnectCode({
        telegramId: Number(telegramId),
      });

      if (!newConnectionCode.code) return false;

      await bot.api.sendMessage(
        telegramId.toString(),
        MESSAGES.linkCode(newConnectionCode.code, false),
        { parse_mode: "HTML" }
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  async accountLinked(user_id: number, nickname: string) {
    try {
      const userData = await userService.getUser({telegramId: user_id});

      if (!userData || !userData.telegramId) return;

      await bot.api.sendMessage(
        userData.telegramId.toString(),
        `✅ Аккаунт <b>${nickname}</b> успешно привязан!`,
        {
          parse_mode: "HTML",
        }
      );
    } catch (e) {
      console.error("Не удалось отправить сообщение в Telegram:", e);
    }
  },
};
