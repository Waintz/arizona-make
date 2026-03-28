import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { withdrawMessage } from "../../resources/withdraw.message";
import { withdrawKeyboard } from "./withdraw.keyboard";
import { withdrawTypes } from "../../types/withdraw.types";

export const withdrawComposer = new Composer<UserContext>();

withdrawComposer.callbackQuery("profile:withdraw", async (ctx) => {
  await ctx.editMessageText(withdrawMessage.main(ctx.user?.balance || 0), {
    parse_mode: "HTML",
    reply_markup: withdrawKeyboard.view(),
  });

  await ctx.answerCallbackQuery();
});

withdrawComposer.callbackQuery("withdraw:crypto", async (ctx) => {
  const balance = Number(ctx.user?.balance ?? 0);

  console.log("Debug Balance:", balance);

  if (balance <= withdrawTypes.minimum) {
    await ctx.editMessageText(withdrawMessage.minimumAmount(balance), {
      parse_mode: "HTML",
      reply_markup: withdrawKeyboard.back(),
    });

    await ctx.answerCallbackQuery();
    return;
  }

  await ctx.answerCallbackQuery();

  await ctx.conversation.enter("cryptoWithdrawConversation");
});

withdrawComposer.callbackQuery("withdraw:custom", async (ctx) => {
  const balance = Number(ctx.user?.balance ?? 0);

  console.log("Debug Balance:", balance);
  if (balance <= withdrawTypes.minimum) {
    return await ctx.editMessageText(withdrawMessage.minimumAmount(balance), {
      parse_mode: "HTML",
      reply_markup: withdrawKeyboard.back(),
    });
  }

  await ctx.answerCallbackQuery();

  await ctx.editMessageText(withdrawMessage.custom(),
    { parse_mode: "HTML", reply_markup: withdrawKeyboard.custom() },
  );
});
