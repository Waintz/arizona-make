import { CallbackQueryContext, InlineKeyboard } from "grammy";
import { ConversationContext } from "../conversations/conversation.context";
import { UserContext } from "../context/context";
import { telegramChannelService } from "../service/telegam.channel.service";
import { RACE_CHANNEL_ID } from "../constants/allowedChannels";
import { MESSAGES } from "../resources/messages";

export const findRaceKeyboard = {
  view(inviteLink: string) {
    return new InlineKeyboard()
      .url("🏎 Вступить в канал", inviteLink)
      .text("🔙 Назад в меню", "menu:back");
  },

  async open({
    callbackCtx,
  }: {
    callbackCtx: CallbackQueryContext<UserContext>;
  }) {
    const newInviteLink = await telegramChannelService.generateRaceInvite(
      RACE_CHANNEL_ID.toString(),
      {
        telegramId: callbackCtx.from.id,
      }
    );

    await callbackCtx.editMessageText(MESSAGES.raceInvite(newInviteLink), {
      parse_mode: "HTML",
      reply_markup: findRaceKeyboard.view(newInviteLink),
    });
  },
};
