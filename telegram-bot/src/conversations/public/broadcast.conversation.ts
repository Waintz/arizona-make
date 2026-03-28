import { UserContext } from "../../context/context";
import { broadcastKeyboard } from "../../keyboards/broadcast/broadcast.keyboard";
import { renderDeveloperMenu } from "../../keyboards/developer/developer.composer";
import { broadcastMessage } from "../../resources/broadcast.message";
import { broadcastService } from "../../service/broadcast.service";
import { ConversationContext } from "../conversation.context";

export async function broadcastConversation(
  conversation: ConversationContext,
  ctx: UserContext
) {
  await ctx.editMessageText(broadcastMessage.view(), {
    parse_mode: "HTML",
    reply_markup: broadcastKeyboard.back(),
  });

  const action = await conversation.wait();

  if (action.callbackQuery?.data === "menu:developer") {
    return renderDeveloperMenu(ctx);
  }

  const broadcastPhoto =
    action?.message?.photo?.[action?.message.photo.length - 1]?.file_id;
  const broadcastText = action?.message?.caption || action?.message?.text || "";

  if (!broadcastText && !broadcastPhoto) {
    return await ctx.reply("❌ Сообщение не может быть пустым!");
  }

  if (broadcastPhoto) {
    await ctx.replyWithPhoto(broadcastPhoto, {
      caption: broadcastMessage.confirm(broadcastText),
      parse_mode: "HTML",
      reply_markup: broadcastKeyboard.confirm(),
    });
  } else {
    await ctx.reply(broadcastMessage.confirm(broadcastText), {
      parse_mode: "HTML",
      reply_markup: broadcastKeyboard.confirm(),
    });
  }

  const { match } = await conversation.waitForCallbackQuery([
    "confirm_send",
    "cancel_send",
  ]);

  if (match === "confirm_send") {
    const statusMsg = await ctx.reply("🚀 Рассылка запущена...");
    
    await broadcastService.start(broadcastText, broadcastPhoto);
    
    await conversation.external(() => new Promise((res) => setTimeout(res, 1000)));

    return renderDeveloperMenu(ctx, statusMsg.message_id);
} else {
    const cancelMsg = await ctx.reply(broadcastMessage.cancelled(), { parse_mode: "HTML" });

    await conversation.external(() => new Promise((res) => setTimeout(res, 1000)));

    return renderDeveloperMenu(ctx, cancelMsg.message_id);
}
}
