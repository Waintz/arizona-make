import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { securityMessage } from "../../resources/security.message";
import { userService } from "../../service/user.service";
import { securityKeyboard } from "./security.keyboard";

export const securityComposer = new Composer<UserContext>();

securityComposer.callbackQuery("settings:security", async (ctx) => {
  try {
    const userSettings = await userService.getUserSettings({
      telegramId: ctx.from!.id,
    });

    const isStealth = userSettings.data.is_stealth ?? false;

    await ctx.editMessageText(securityMessage.main(), {
      parse_mode: "HTML",
      reply_markup: securityKeyboard.view(isStealth),
    });
  } catch (error) {
    console.error("Ошибка загрузки настроек безопасности", error);
    await ctx.answerCallbackQuery("Ошибка загрузки настроек");
  }
});

securityComposer.callbackQuery("security:toggle_stealth", async (ctx) => {
  try {
    if (!ctx.user?.vip_expires_at || new Date(ctx.user.vip_expires_at) < new Date()) {
      await ctx.answerCallbackQuery(
        "Функция доступна только для VIP пользователей",
      );
      return;
    }

    const currentSettings = await userService.getUserSettings({
      telegramId: ctx.from!.id,
    });

    const nextValue = !(currentSettings.data.is_stealth ?? false);

    await userService.updateUserSettings(
      { telegramId: ctx.from!.id },
      { is_stealth: nextValue }
    );

    await ctx.editMessageReplyMarkup({
      reply_markup: securityKeyboard.view(nextValue),
    });

    await ctx.answerCallbackQuery("Настройки обновлены");
  } catch (error) {
    await ctx.answerCallbackQuery();
  }
});
