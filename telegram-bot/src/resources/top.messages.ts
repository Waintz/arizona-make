import { GameAccount } from "../api/types/game-account.types";
import { User } from "../api/types/user.types";

type AccountWithUser = GameAccount & { user: User };

export const topMessages = {
  leaderboard: (topPlayers: AccountWithUser[]) => {
    let text = `🏆 <b>ТОП-10 ГОНЩИКОВ</b>\n`;
    text += `<i>Кто заработал больше всех побед:</i>\n\n`;

    if (topPlayers.length === 0) {
      return text + "🤷‍♂️ <b>Список пока пуст.</b> Стань первым!";
    }

    topPlayers.forEach((account, index) => {
      const rank = index + 1;
      
      let icon = "▫️";
      if (rank === 1) icon = "🥇";
      if (rank === 2) icon = "🥈";
      if (rank === 3) icon = "🥉";


      const isVip = account.user.vip_expires_at 
        ? new Date(account.user.vip_expires_at) > new Date() 
        : false;

      const nameDisplay = isVip 
        ? `<b>${account.nickname}</b> 👑`
        : account.nickname;

      text += `${icon} ${rank}. [${account.server}] ${nameDisplay} — <b>${account.wins}</b>\n`;
    });

    text += `\n<i>Обновляется в реальном времени...</i>`;
    return text;
  },
};