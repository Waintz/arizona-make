import { Composer } from "grammy";
import { UserContext } from "../../context/context";

export const forceStartComposer = new Composer<UserContext>();

forceStartComposer.command("forcestart", async (ctx) => {
  try {
    await ctx.conversation.enter("forceStartConversation");
  } catch (error) {
    console.error(error);
  }
});
