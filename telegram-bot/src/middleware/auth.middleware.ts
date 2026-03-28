import { NextFunction } from "grammy";
import { UserContext } from "../context/context";
import { allowedChannels } from "../constants/allowedChannels";
import { userService } from "../service/user.service";

export async function authMiddleware(ctx: UserContext, next: NextFunction) {
  if (ctx.from) {
    const user = await userService.getUser({ telegramId: BigInt(ctx.from.id) });

    ctx.user = user;
  }

  await next();
}

export async function requireAuth(ctx: UserContext, next: NextFunction) {
  for (let allowedId of allowedChannels) {
    if (ctx.chat?.id === allowedId) {
      return next();
    }
  }

  if (!ctx.user) {
    await ctx.reply("⛔️ Сначала нажми /start для регистрации!");
    return;
  }

  await next();
}
