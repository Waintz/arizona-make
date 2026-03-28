import { withdrawTypes } from "../types/withdraw.types";

export const withdrawMessage = {
  main(balance: number) {
    const formattedBalance = balance.toLocaleString("ru-RU");

    return `
💳 <b>Заявка на вывод средств</b>

💰 <b>Ваш баланс:</b> <code>${formattedBalance}₽</code>

👇 <b>Выберите платежную систему для зачисления:</b>
    `;
  },

  crypto() {
    return `
💎 <b>Вывод средств: Криптовалюта</b>

Отправьте в чат ваш кошелек и название валюты.
Пожалуйста, используйте один из форматов ниже:

<b>НазваниеКриптоВалютыКоротко Адресс</b>

Примеры:

<b>1️⃣ Для TON (The Open Network):</b>
<code>TON UQAVr7X...ваши_цифры...</code>

<b>2️⃣ Для USDT (сеть TRC-20):</b>
<code>USDT TJxXr7X...ваши_цифры...</code>

⚠️ <b>Внимание!</b>
Внимательно проверяйте адрес. При ошибке в одной букве или выборе неверной сети <b>средства будут безвозвратно утеряны</b>.
  `;
  },

  minimumAmount(balance: number) {
    return `
⚠️ <b>Минимальная сумма вывода — ${withdrawTypes.minimum}₽.</b>
Ваш текущий баланс: <code>${balance.toLocaleString("ru-RU")}₽</code>
    `;
  },

  custom() {
    return (
      "<b>Свяжитесь с нами:</b> <a href='https://t.me/Tackerl'>@Tackerl</a>\n\n" +
      "⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯\n" +
      "<b>Способы оплаты и условия:</b>\n" +
      "• <b>Метод:</b> Донат в игру или покупка товара через сервис.\n" +
      "• <b>Валюта:</b> Криптовалюта или карты Украины (UAH).\n" +
      `• <b>Минимум:</b> до ${withdrawTypes.minimum}₽.\n\n` +
      "⚠️ <i>Важно, чтобы выбранный вами сервис поддерживал указанные способы оплаты.</i>"
    );
  },
};
