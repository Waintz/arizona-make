import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { helpKeyboard } from "./help.keyboard";

export const helpComposer = new Composer<UserContext>();

helpComposer.callbackQuery("menu:help", async (ctx) => {
  await ctx.editMessageText(
    "🛠 Раздел помощи в разработке.\n\nЗайдите в официальный канал и нажмите на сообщение внизу слева.",
    {
      parse_mode: "HTML",
      reply_markup: helpKeyboard.back(),
    }
  );
  await ctx.answerCallbackQuery();
});
