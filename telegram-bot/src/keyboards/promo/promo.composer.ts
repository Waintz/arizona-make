import { Composer } from "grammy";
import { UserContext } from "../../context/context";

export const promoComposer = new Composer<UserContext>();

promoComposer.callbackQuery("vip:promo", async (ctx) => {
  await ctx.conversation.enter("promoConversation");

  await ctx.answerCallbackQuery();
});