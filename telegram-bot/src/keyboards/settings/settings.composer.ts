import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { settingsMessage } from "../../resources/settings.message";
import { settingsKeyboard } from "./settings.keyboard";

export const settingsComposer = new Composer<UserContext>();

settingsComposer.callbackQuery("menu:settings", async (ctx) => {
  await ctx.editMessageText(settingsMessage.main(), {
    parse_mode: "HTML",
    reply_markup: settingsKeyboard.view(),
  });
  await ctx.answerCallbackQuery();
});