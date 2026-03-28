import { Composer } from "grammy";
import { UserContext } from "../../context/context";

export const promoComposer = new Composer<UserContext>();

promoComposer.command("promo", async (ctx) => {
  try {
    await ctx.conversation.enter("promoConversation");
  } catch (error) {
    console.error(error);
  }
});
