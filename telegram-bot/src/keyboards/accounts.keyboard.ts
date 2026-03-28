import { GameAccount } from "../api/types/game-account.types";
import { UserContext } from "../context/context";
import { ConversationContext } from "../conversations/conversation.context";
import { selectionHelper, SelectOption } from "../helpers/selection.helper";

export const accountsKeyboard = {
  selectGameAccount(gameAccount: GameAccount[]) {
    const options: SelectOption<GameAccount>[] = gameAccount.map((account) => ({
      id: String(account.id),
      label: `📍 [${account.server}] ${account.nickname}`,
      value: account,
    }));

    return selectionHelper.createKeyboard(options, "accounts_info");
  },

  async handlerGameAccount(data: {
    conversation: ConversationContext;
    gameAccounts: GameAccount[];
    ctx: UserContext;
  }) {
    const options: SelectOption<GameAccount>[] = data.gameAccounts.map(
      (account) => ({
        id: String(account.id),
        label: `📍 [${account.server}] ${account.nickname}`,
        value: account,
      })
    );

    return selectionHelper.handleSelection<GameAccount>({
      conversation: data.conversation,
      ctx: data.ctx,
      prefix: "accounts_info",
      items: options,
      isReturnText: false,
    });
  },
};
