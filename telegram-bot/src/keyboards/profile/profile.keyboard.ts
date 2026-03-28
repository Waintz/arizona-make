import { InlineKeyboard } from "grammy";
import { GameAccount } from "../../api/types/game-account.types";

export const profileKeyboard = {
  view() {
    return new InlineKeyboard()
      .text("🔑 Авторизация скрипта", "profile:auth")
      .row()
      .text("📎 Привязать аккаунт", "profile:link")
      .text("🗑️ Отвязать аккаунт", "profile:unlink")
      .row()
      .text("💵 Вывести баланс", "profile:withdraw")
      .text("✉️ Мои заявки", "profile:withdrawals")
      .row()
      .text("🔙 Назад в меню", "menu:back");
  },

  back() {
    return new InlineKeyboard().text("🔙 Назад", "menu:profile");
  },

  selectAccount(accounts: GameAccount[]) {
    const keyboard = new InlineKeyboard();
    
    accounts.forEach((acc) => {
      keyboard.text(
        `${acc.nickname} [${acc.server}]`, 
        `unlink_do:${acc.nickname}:${acc.server}`
      ).row();
    });

    keyboard.text("🔙 Отмена", "menu:profile");
    return keyboard;
  }
};