export const developerMessage = {
  main() {
    return `🤖 Для разработчиков\n\n🛠 Здесь вы можете использовать функции для комфортой разработки`;
  },

  withdrawals() {
    return `📩 Заявки на вывод средств.`;
  },

  withdrawal({
    username,
    name,
    amount,
    currency,
    wallet_address,
    status,
    accounts,
  }: {
    username: string;
    name: string;
    amount: number;
    currency: string;
    wallet_address: string;
    status: string;
    accounts: Array<Record<string, string>>;
  }) {
    const accountsList =
      accounts.length > 0
        ? accounts
            .map(
              (acc) =>
                `• [${acc.server}] ${acc.nickname}`
            )
            .join("\n")
        : "<i>Данные отсутствуют</i>";

    return `
<b>💳 ЗАЯВКА НА ВЫВОД СРЕДСТВ</b>

👤 <b>Клиент:</b> ${name} 
🆔 <b>Username:</b> @${username || "не указан"}
📊 <b>Статус:</b> <code>${status.toUpperCase()}</code>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

💰 <b>Сумма к получению:</b>
<blockquote><b>${amount.toLocaleString()}₽</b></blockquote>

🔄 <b>Валюта для перевода:</b>
<blockquote><b>${currency}</b></blockquote>

👛 <b>Реквизиты для перевода:</b>
<code>${wallet_address}</code>

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

🗄 <b>Связанные аккаунты:</b>
${accountsList}

📅 <i>Дата формирования: ${new Date().toLocaleDateString("ru-RU")}</i>
    `.trim();
  },

  withdrawalApproved() {
    return `✅ Заявка успешно одобрена!`
  },

  withdrawalRejected() {
    return `✅ Заявка успешно отказана!`
  },

  reasonForRefusal() {
    return `❓ Введите причину отказа`
  },

  commentFromAdministrator() {
    return `❓ Введите комментарий`
  }
};
