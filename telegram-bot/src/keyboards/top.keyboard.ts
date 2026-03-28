import { CallbackQueryContext, InlineKeyboard } from "grammy";
import { statsService } from "../service/stats.service";
import { UserContext } from "../context/context";
import { topMessages } from "../resources/top.messages";

export const topKeyboard = {
  view() {
    return new InlineKeyboard()
      .text("🔄 Обновить", "menu:top")
      .row()
      .text("🔙 Назад в меню", "menu:back");
  },

  async open({
    callbackCtx,
  }: {
    callbackCtx: CallbackQueryContext<UserContext>;
  }) {
    const topPlayers = await statsService.getLeaderboard(10);

    await callbackCtx.editMessageText(
      topMessages.leaderboard(topPlayers.data.leaderboard),
      {
        parse_mode: "HTML",
        reply_markup: topKeyboard.view(),
      }
    );
  },

  async handler({
    action,
    callbackCtx,
  }: {
    action: string;
    callbackCtx: CallbackQueryContext<UserContext>;
  }) {
    if (action !== "top:refresh") return;

    const topPlayers = await statsService.getLeaderboard(10);

    try {
      await callbackCtx.editMessageText(
        topMessages.leaderboard(topPlayers.data.leaderboard),
        {
          parse_mode: "HTML",
          reply_markup: topKeyboard.view(),
        }
      );
    } catch (error: any) {
      if (error.description?.includes("message is not modified")) {
        await callbackCtx.answerCallbackQuery({
          text: "✅ Список актуален",
        });
      } else {
        throw error;
      }
    }
  },
};
