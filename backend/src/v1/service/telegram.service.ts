import axios from "axios";
import { userService } from "./user.service";
import { get_RACE_CHANNEL_ID, get_RACE_VIP_CHANNEL_ID } from "../types/constants";

interface SendMessageOptions {
  chatId?: string | number | bigint;
  caption?: string;
  text?: string;
  photo?: string | null;
  parse_mode?: "HTML" | "MarkdownV2";
  reply_markup?: {
    inline_keyboard: Array<
      Array<{ text: string; url?: string; callback_data?: string }>
    >;
  };
}

class TelegramService {
  private readonly token = process.env.TOKEN_TELEGRAM_BOT;
  private readonly raceChatId = process.env.RACE_CHANNEL_ID;
  private readonly apiUrl = `https://api.telegram.org/bot${this.token}`;

  async send(options: SendMessageOptions) {
    const {
      chatId = this.raceChatId,
      text,
      photo,
      caption,
      parse_mode = "HTML",
      reply_markup,
    } = options;
    console.log("Отправляем сообщение в Telegram:", {
      chatId,
      text,
      caption,
      photo,
    });

    if (!this.token) {
      console.error("TG_TOKEN is not defined in .env");
      return;
    }

    try {
      const method = photo ? "sendPhoto" : "sendMessage";

      const payload: any = {
        chat_id: chatId,
        parse_mode,
        reply_markup,
      };

      if (photo) {
        payload.photo = photo;
        payload.caption = caption || text;
      } else {
        payload.text = text || caption;
      }

      const response = await axios.post(`${this.apiUrl}/${method}`, payload);
      return response.data;
    } catch (error: any) {
      console.error("TG Service Error:", error.response?.data || error.message);
      throw error;
    }
  }

  async notifyRaceStarted(
    locationName: string,
    prize: string,
    fileId?: string,
    channelId?: string | number
  ) {
    const text =
      `🟢 <b>ГОНКА НАЧАЛАСЬ!</b>\n\n` +
      `📍 Локация: <b>${locationName}</b>\n` +
      `🏆 Приз: <b>${prize}</b>\n` +
      `🏁 <b>Ищите место в игре!</b>`;

    return this.send({
      photo: fileId,
      caption: text,
      chatId: channelId,
    });
  }

  async notifyRaceWinner(
    channelId: string | undefined,
    data: { prize: string; nickname: string; server: number }
  ) {
    const text =
      `🏁 <b>ГОНКА ЗАВЕРШЕНА!</b>\n\n` +
      `🥇 Победитель: <b>${data.nickname}</b>\n` +
      `💰 Приз: <b>${data.prize}</b>\n` +
      `🌍 Сервер: <b>${data.server}</b>\n\n` +
      `🎉 Поздравляем чемпиона! Ждите новых заездов!`;

    return this.send({
      text,
      chatId: channelId,
      parse_mode: "HTML",
    });
  }

  async notifyAccountLinked(userId: number, nickname: string) {
    const userData = await userService.getUser({ userId: userId });

    const text = `✅ Аккаунт <b>${nickname}</b> успешно привязан!`;

    return this.send({
      chatId: userData?.telegram_id || undefined,
      text: text,
      parse_mode: "HTML",
    });
  }

  async sendRaceInvite(telegramId: string | number, isVip: boolean) {
    try {
      const RACE_CHANNEL = isVip ? get_RACE_VIP_CHANNEL_ID() : get_RACE_CHANNEL_ID();
      console.log("tgid", telegramId)

      if (!RACE_CHANNEL) {
        console.error("Race channel ID is not defined");
        return;
      }


      const newInviteLink = await telegramService.generateRaceInvite(
        RACE_CHANNEL.toString(),
        telegramId
      );

      const text =
        `🔐 <b>Доступ открыт!</b>\n\n` +
        `Залетай в канал и жди фото места:\n` +
        `${newInviteLink}\n\n` +
        `<i>Ссылка индивидуальная, другу не кидай — не сработает.</i>`;

      const reply_markup = {
        inline_keyboard: [
          [{ text: "🏎 Вступить в канал", url: newInviteLink }],
          [{ text: "📂 В главное меню", callback_data: "menu:back" }],
        ],
      };

      await this.send({
        chatId: telegramId,
        parse_mode: "HTML",
        reply_markup: reply_markup,
        text: text,
      });
    } catch (error) {}
  }

  async generateRaceInvite(channelId: string, telegramId: number | string) {
    try {
      console.log("tdId generate", telegramId)
      const response = await axios.post(`${this.apiUrl}/createChatInviteLink`, {
        chat_id: channelId,
        creates_join_request: true,
        expire_date: Math.floor(Date.now() / 1000) + 600,
        name: `User_${telegramId}`,
      });
      return response.data.result.invite_link;
    } catch (error: any) {
      console.error(
        "Invite Link Error:",
        error.response?.data || error.message
      );
    }
  }
}

export const telegramService = new TelegramService();
