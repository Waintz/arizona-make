import { NextFunction } from "grammy";
import { UserContext } from "../context/context";
import { vipKeyboard } from "../keyboards/vip/vip.keyboard";

export async function vipGuardMiddleware(ctx: UserContext, next: NextFunction) {
  console.log("VIP GUARD:", ctx.user);

  if (
    ctx.user?.vip_expires_at &&
    new Date(ctx.user.vip_expires_at) > new Date()
  ) {
    return next();
  }

  if (ctx.callbackQuery) {
    await ctx.answerCallbackQuery({ text: "👑 Доступно только для VIP" });
  }

  await ctx.reply("⛔️ Эта функция доступна только для VIP-пользователей.", {
    reply_markup: vipKeyboard.offerBuyView(),
    parse_mode: "HTML",
  });
}
