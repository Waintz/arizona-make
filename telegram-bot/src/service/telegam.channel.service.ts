import { InlineKeyboard } from "grammy";
import { bot } from "../../bot";
import {
  RACE_CHANNEL_ID,
  RACE_VIP_CHANNEL_ID,
} from "../constants/allowedChannels";
import { MESSAGES } from "../resources/messages";

export const telegramChannelService = {
  async generateRaceInvite(
    CHANNEL_ID: string,
    user: { telegramId: number | string }
  ) {
    try {
      console.log("generate", CHANNEL_ID, user)

      const invite = await bot.api.createChatInviteLink(CHANNEL_ID || "", {
        creates_join_request: true,
        expire_date: Math.floor(Date.now() / 1000) + 600,
        name: `Telegram_id_${user.telegramId}`,
      });

      return invite.invite_link;
    } catch (error) {
      console.error("Ошибка создания инвайта:", error);
      throw error;
    }
  },

  async sendRaceInvite(telegramId: string | number, is_vip: boolean) {
    try {

      console.log("sendRaceInvite", telegramId, is_vip)

      const RACE_CHANNEL = is_vip ? RACE_VIP_CHANNEL_ID : RACE_CHANNEL_ID;

      const newInviteLink = await telegramChannelService.generateRaceInvite(
        RACE_CHANNEL.toString(),
        {
          telegramId: telegramId,
        }
      );

      const keyboard = new InlineKeyboard()
        .url("🏎 Вступить в канал", newInviteLink)
        .row()
        .text("📂 В главное меню", "menu:back");

      await bot.api.sendMessage(
        telegramId.toString(),
        MESSAGES.raceInvite(newInviteLink),
        { parse_mode: "HTML", reply_markup: keyboard }
      );

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};
