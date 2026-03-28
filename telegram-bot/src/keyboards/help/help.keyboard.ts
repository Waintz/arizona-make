import { InlineKeyboard } from "grammy";

export const helpKeyboard = {
  back: () => {
    return new InlineKeyboard().text("🔙 Назад в меню", "menu:back");
  },
};
