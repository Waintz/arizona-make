import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { notificationsMessage } from "../../resources/notifications.message";
import { userService } from "../../service/user.service";
import { notificationsKeyboard } from "./notifications.keyboard";

export const notificationsComposer = new Composer<UserContext>();

notificationsComposer.callbackQuery("settings:notifications", async (ctx) => {
  const userSettings = await userService.getUserSettings({
    telegramId: ctx.from!.id,
  });

  const isNotifyNews = userSettings.data.notify_news ?? true;

  await ctx.editMessageText(notificationsMessage.view(), {
    reply_markup: notificationsKeyboard.view(isNotifyNews),
    parse_mode: "HTML"
  });

  await ctx.answerCallbackQuery();
});


notificationsComposer.callbackQuery("notifications:toggle_news", async (ctx) => {
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

    const nextValue = !(currentSettings.data.notify_news ?? false);

    await userService.updateUserSettings(
      { telegramId: ctx.from!.id },
      { notify_news: nextValue }
    );

    await ctx.editMessageReplyMarkup({
      reply_markup: notificationsKeyboard.view(nextValue),
    });

    await ctx.answerCallbackQuery("Настройки обновлены");
  } catch (error) {
    await ctx.answerCallbackQuery();
  }
});
