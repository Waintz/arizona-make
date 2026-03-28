import { GameAccount } from "../api/types/game-account.types";

export const profileMessage = {
  main({ gameAccounts, balance = 0 }: { gameAccounts: GameAccount[], balance?: number | string }) {
    if (!gameAccounts.length) {
      return `
👤 <b>Личный кабинет</b>

📂 <b>У вас нет привязанных аккаунтов</b>

<i>💡 Используйте меню ниже для управления.</i>
      `.trim();
    }

    const header =
      gameAccounts.length === 1
        ? "📂 <b>Ваш аккаунт:</b>"
        : `📂 <b>Ваши аккаунты (${gameAccounts.length}):</b>`;

    const accountsList = gameAccounts
      .map(
        (acc) =>
          `▫️ <b>${acc.nickname}</b> <code>[${acc.server}]</code>`
      )
      .join("\n");

    return `
👤 <b>Личный кабинет</b>

${header}
${accountsList}

💰<b>Ваш баланс: ${balance}₽</b>

<i>💡 Используйте меню ниже для управления.</i>
    `.trim();
  },
};
