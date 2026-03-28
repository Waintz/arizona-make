import { UserContext } from "../../context/context";
import { developerKeyboard } from "../../keyboards/developer/developer.keyboard";
import { developerMessage } from "../../resources/developer.message";
import { withdrawalService } from "../../service/withdrawal.service";
import { ConversationContext } from "../conversation.context";

export async function withdrawalRequestRejectedConversation(
  conversation: ConversationContext,
  ctx: UserContext,
  requestId: number
) {
  if (!ctx.chat?.id || !ctx.from?.id) return;

  console.log("В КОНВЕРСЕЙТИОН ПОПАЛИ");

  await ctx.editMessageText(developerMessage.reasonForRefusal(), {
    reply_markup: developerKeyboard.back(),
  });

  const newCtx = await conversation.wait();

  if (newCtx.callbackQuery?.data === "developer:withdrawal:requests") {
    const requests = await withdrawalService.getWithdrawalRequests({});
    await newCtx.answerCallbackQuery();
    await newCtx.editMessageText(developerMessage.withdrawals(), {
      parse_mode: "HTML",
      reply_markup: developerKeyboard.withdrawals({
        page: 1,
        withdrawals: requests.data.withdrawals,
        totalWithdrawals: requests.data.total,
      }),
    });
    return;
  }

  const reason = newCtx.message?.text;

  await ctx.reply(developerMessage.commentFromAdministrator(), {
    reply_markup: developerKeyboard.back(),
  });

  const adminCommentCtx = await conversation.wait();

  if (adminCommentCtx.callbackQuery?.data === "developer:withdrawal:requests") {
    const requests = await withdrawalService.getWithdrawalRequests({});
    await adminCommentCtx.answerCallbackQuery();
    await adminCommentCtx.editMessageText(developerMessage.withdrawals(), {
      parse_mode: "HTML",
      reply_markup: developerKeyboard.withdrawals({
        page: 1,
        withdrawals: requests.data.withdrawals,
        totalWithdrawals: requests.data.total,
      }),
    });
    return;
  }

  const adminComment = adminCommentCtx.message?.text;

  await withdrawalService.rejectWithdrawalRequest(
    requestId,
    reason || "",
    adminComment || ""
  );

  await ctx.reply(developerMessage.withdrawalRejected(), {
    reply_markup: developerKeyboard.back(),
  });
}
