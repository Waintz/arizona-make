import { InlineKeyboard } from "grammy";

export const withdrawKeyboard = {
  view() {
    return new InlineKeyboard()
      .text("💎 Криптовалюта (USDT/TON)", "withdraw:crypto")
      .row()
      .text("💳 Другой способ", "withdraw:custom")
      .row()
      .text("🔙 Назад", "menu:profile");
  },

  back() {
    return new InlineKeyboard().text("🔙 Назад", "profile:withdraw");
  },

  confirmationRequisites() {
    return new InlineKeyboard()
      .text("✅ Все верно", "withdraw:confirmRequisites")
      .row()
      .text("❌ Отмена", "menu:profile");
  },

  custom() {
    return new InlineKeyboard()
      .url("💬 Написать в Telegram", "https://t.me/Tackerl")
      .text("🔙 Назад", "profile:withdraw")
  }
};