export const withdrawalsMessage = {
  main: () => `
✉️ <b>Мои заявки на вывод средств</b>`,

  notFound: () => `
    👷 <b>Произошла ошибка, завяка не найдена</b>
  `,

  viewRequest: (withdrawals: Record<string, unknown>) => {
    console.log("ЗАЯВКИ ДАННЫЕ", withdrawals)

    const statusMap = {
      PENDING: "В режиме ожидания",
      APPROVED: "Заявка одобрена!",
      REJECTED: "Заявка отклонена",
    };

    const date = withdrawals.created_at
      ? new Date(withdrawals.created_at as string).toLocaleString("ru-RU")
      : "Не указана";

    return `
💸 **Заявка на вывод #${withdrawals.id || "N/A"}**

💰 **Сумма:** ${withdrawals.amount}₽
🔄 **Валюта для перевода:** ${withdrawals.currency}
📅 **Дата:** ${date}
📊 **Статус:** ${statusMap[withdrawals.status as keyof typeof statusMap] || withdrawals.status }

💳 **Кошелек:**
\`${withdrawals.wallet_address}\`

${withdrawals.tx_hash ? `🔗 **TX Hash:** \n\`${withdrawals.tx_hash}\`` : ""}
${
  withdrawals.rejection_reason
    ? `⚠️ **Причина отказа:** ${withdrawals.rejection_reason}`
    : ""
}
${
  withdrawals.admin_comment
    ? `💬 **Комментарий админа:** ${withdrawals.admin_comment}`
    : ""
}
    `.trim();
  },
};
