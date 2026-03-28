import { InlineKeyboard } from "grammy";

export const settingsKeyboard = {
  view() {
    return new InlineKeyboard()
      .text("🔒 Безопасность", "settings:security") 
      .row()
      .text("🔔 Уведомления", "settings:notifications") 
      .text("🎨 Интерфейс", "settings:interface") 
      .row()
      .text("🔙 Назад в меню", "menu:back");
  },

  back() {
    return new InlineKeyboard().text("🔙 Назад в меню", "menu:settings");
  }
};