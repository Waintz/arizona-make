import { Composer } from "grammy";
import { UserContext } from "../../context/context";

export const boradcastComposer = new Composer<UserContext>()

boradcastComposer.callbackQuery("broadcast", async (ctx) => {
  await ctx.conversation.enter("broadcastConversation");

  await ctx.answerCallbackQuery();
})