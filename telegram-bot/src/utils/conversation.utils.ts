import { UserContext } from "../context/context";
import { ConversationContext } from "../conversations/conversation.context";
import { accountsKeyboard } from "../keyboards/accounts.keyboard";
import { userService } from "../service/user.service";

export async function askForGameAccount(
  conversation: ConversationContext,
  ctx: UserContext,
  messageText: string = "<b>Выберите аккаунт:</b>"
) {
  const gameAccounts = await conversation.external(() =>
    userService.getAccounts({ telegramId: ctx.from!.id })
  );

  if (!gameAccounts || gameAccounts.gameAccounts.length === 0) {
    await ctx.reply("❌ У вас нет привязанных аккаунтов. Используйте /link");
    return null;
  }

  await ctx.reply(messageText, {
    parse_mode: "HTML",
    reply_markup: accountsKeyboard.selectGameAccount(
      gameAccounts.gameAccounts
    ),
  });

  const selectedAccount = await accountsKeyboard.handlerGameAccount({
    conversation,
    ctx,
    gameAccounts: gameAccounts.gameAccounts,
  });

  return selectedAccount;
}
