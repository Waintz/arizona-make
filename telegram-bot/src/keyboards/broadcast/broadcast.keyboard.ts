import { InlineKeyboard } from "grammy"

export const broadcastKeyboard = {
  back() {
    return new InlineKeyboard().text("🔙 Назад", "menu:developer")
  },

  confirm() {
    return new InlineKeyboard()
      .text("🚀 Начать рассылку", "confirm_send")
      .row()
      .text("❌ Отмена", "cancel_send")
  },

  toMenu() {
    return new InlineKeyboard().text("🏠 В главное меню", "menu:developer")
  }
}