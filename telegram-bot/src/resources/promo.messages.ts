export const promoMessages = {
  main() {
    return (
      "🎁 <b>Активация промокода</b>\n\n" +
      "Отправьте код в чат (или нажмите кнопку Отмена):"
    );
  },

  notPromoCode() {
    return "❌ Это не промокод. Нужно отправить текст.";
  },
  
  vipActivated() {
    return "🥳 Вы получили VIP статус, удачи в гонках!";
  },

  codeNotFound() {
    return "😔 Такого кода не существует либо он уже был использован";
  },
};
