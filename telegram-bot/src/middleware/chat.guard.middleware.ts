import { NextFunction } from "grammy";
import { UserContext } from "../context/context";
import { allowedChannels, ASSETS_CHANNEL_ID } from "../constants/allowedChannels";

export async function chatGuardMiddleware(
  ctx: UserContext,
  next: NextFunction
) {
  for (let allowedId of allowedChannels) {
    if (ctx.chat?.id === allowedId) {
      return next();
    }
  }

  if (ctx.chatJoinRequest) {
    return next();
  }

  if (ctx.chat?.type === "private") {
    return next();
  }

  if (
    ctx.chat?.type === "group" ||
    ctx.chat?.type === "supergroup" ||
    ctx.chat?.type === "channel"
  ) {
    await ctx.reply("⛔️ Бот работает только в ЛС.");
  }
  return;
}

export async function chatGuardSendFile_id(
  ctx: UserContext,
  next: NextFunction
) {
  if (ctx.chat?.id === ASSETS_CHANNEL_ID) {
    return next();
  }
}
