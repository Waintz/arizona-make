import { InlineKeyboard } from "grammy";

export const vipKeyboard = {
  view() {
    return new InlineKeyboard()
      .text("💎 Купить доступ (30 дней)", "vip:buy:30")
      .row()
      .text("🤝 Купить доступ (7 дней)", "vip:buy:7")
      .row()
      .text("🎟 Ввести промокод", "vip:promo")
      .row()
      .text("🔙 Назад в меню", "menu:back");
  },

  paymentCryptoView(days: number) {
    return new InlineKeyboard()
      .text("🔄 Проверить оплату", `vip:buy:${days}:crypt:check_payment`)
      .row()
      .text("🔙 Отмена", "menu:vip");
  },

  successView() {
    return new InlineKeyboard().text("🔙 Назад в меню", "menu:back");
  },

  offerBuyView() {
    return new InlineKeyboard()
      .text("💎 Купить VIP-статус", "menu:vip")
      .row()
      .text("🔙 Назад в меню", "menu:back");
  },

  paymentOptionsView(days: number) {
    return new InlineKeyboard()
      .text("💳 Оплатить на FunPay", `vip:buy:${days}:funpay`)
      .row()
      .text("🪙 Оплатить криптой", `vip:buy:${days}:crypt`)
      .row()
      .text("🔙 Назад в меню", "menu:vip");
  },
};
