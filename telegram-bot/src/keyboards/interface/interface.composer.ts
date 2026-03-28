import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { settingsKeyboard } from "../settings/settings.keyboard";

export const interfaceComposer = new Composer<UserContext>();

interfaceComposer.callbackQuery("settings:interface", async (ctx) => {
  await ctx.answerCallbackQuery("Раздел в разработке");

  await ctx.editMessageText("🔧 Раздел в разработке", {
    parse_mode: "HTML",
    reply_markup: settingsKeyboard.back(),
  })
});