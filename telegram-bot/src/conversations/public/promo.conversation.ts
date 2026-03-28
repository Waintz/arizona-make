import { UserContext } from "../../context/context";
import { renderMainMenu } from "../../features/menu/menu.composer";
import { renderDeveloperMenu } from "../../keyboards/developer/developer.composer";
import { promoKeyboard } from "../../keyboards/promo/promo.keyboard";
import { globalMessages } from "../../resources/global.messages";
import { promoMessages } from "../../resources/promo.messages";
import { promoService } from "../../service/promo.service";
import { telegramChannelService } from "../../service/telegam.channel.service";
import { ConversationContext } from "../conversation.context";

export async function promoConversation(
  conversation: ConversationContext,
  ctx: UserContext
) {
  if (!ctx.chat?.id || !ctx.from?.id) return;

  await ctx.editMessageText(promoMessages.main(), {
    parse_mode: "HTML",
    reply_markup: promoKeyboard.view(),
  });

  const newCtx = await conversation.wait();

  if (newCtx.callbackQuery?.data === "menu:back") {
    return renderMainMenu(ctx, "edit");
  }

  const inputText = newCtx.message?.text;

  if (!inputText) {
    return await ctx.reply(promoMessages.notPromoCode(), {
      parse_mode: "HTML",
      reply_markup: promoKeyboard.view(),
    });
  }

  const activatePromo: boolean | undefined = await promoService.activatePromo({
    code: inputText,
    telegramId: ctx.from.id,
  });

  if (activatePromo) {
    ctx.reply(promoMessages.vipActivated(), { parse_mode: "HTML" });

    telegramChannelService.sendRaceInvite(ctx.from.id, true);
  } else {
    ctx.reply(promoMessages.codeNotFound(), {
      parse_mode: "HTML",
      reply_markup: promoKeyboard.view(),
    });
  }
}
