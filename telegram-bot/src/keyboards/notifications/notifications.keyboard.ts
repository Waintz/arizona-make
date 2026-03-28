import { InlineKeyboard } from "grammy";

export const notificationsKeyboard = {
  view(isNotifyNews: boolean) {
    const statusIcon = isNotifyNews ? "🔔 Включены" : "🔕 Выключены";

    return new InlineKeyboard()
      .text(`Рекламные рассылки: ${statusIcon}`, "notifications:toggle_news")
      .row()
      .text("⬅️ Назад в настройки", "menu:settings");
  },
};