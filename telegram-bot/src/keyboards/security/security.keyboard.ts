import { InlineKeyboard } from "grammy";

export const securityKeyboard = {
  view(is_stealth: boolean) {
    const statusIcon = is_stealth ? "✅" : "❌";

    return new InlineKeyboard()
      .text(`👻 Стелс: ${statusIcon}`, "security:toggle_stealth")
      .row()
      .text("🔙 Назад в настройки", "menu:settings");
  },
};