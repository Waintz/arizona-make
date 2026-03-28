import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { getMainMenuContent } from "./menu.utils";

import { topKeyboard } from "../../keyboards/top.keyboard";
import { findRaceKeyboard } from "../../keyboards/findRace.keyboard";
import { profileComposer } from "../../keyboards/profile/profile.composer";
import { developerComposer } from "../../keyboards/developer/developer.composer";
import { vipComposer } from "../../keyboards/vip/vip.composer";
import { settingsComposer } from "../../keyboards/settings/settings.composer";
import { securityComposer } from "../../keyboards/security/security.composer";
import { telemetryComposer } from "../../keyboards/telemetry/telemetry.composer";
import { userService } from "../../service/user.service";
import { promoComposer } from "../../keyboards/promo/promo.composer";
import { helpComposer } from "../../keyboards/help/help.composer";
import { withdrawComposer } from "../../keyboards/withdraw/withdraw.composer";
import { withdrawalsComposer } from "../../keyboards/withdrawals/withdrawals.composer";
import { boradcastComposer } from "../../keyboards/broadcast/broadcast.composer";
import { notificationsComposer } from "../../keyboards/notifications/notifications.composer";
import { interfaceComposer } from "../../keyboards/interface/interface.composer";
export const menuComposer = new Composer<UserContext>();

menuComposer.use(profileComposer);
menuComposer.use(securityComposer);
menuComposer.use(interfaceComposer);
menuComposer.use(settingsComposer);
menuComposer.use(notificationsComposer);
menuComposer.use(telemetryComposer);
menuComposer.use(developerComposer);
menuComposer.use(vipComposer);
menuComposer.use(promoComposer);
menuComposer.use(helpComposer);
menuComposer.use(boradcastComposer);
menuComposer.use(withdrawComposer);
menuComposer.use(withdrawalsComposer);

/* ================= 2. БАЗОВАЯ ЛОГИКА МЕНЮ (/start) ================= */
menuComposer.command(["menu", "start"], async (ctx) => {
  if (!ctx.from?.id) return;
  console.log(ctx);
  const content = await getMainMenuContent(ctx.from.id);

  ctx.isVip = content.isVip;

  await userService.registrationTelegram({
    telegramId: ctx.from.id,
    username: ctx.from.username,
  });

  await ctx.reply(content.text, {
    parse_mode: "HTML",
    reply_markup: content.keyboard,
  });
});

menuComposer.callbackQuery("menu:back", async (ctx) => {
  if (!ctx.from?.id) return;
  const content = await getMainMenuContent(ctx.from.id);

  ctx.isVip = content.isVip;
  try {
    await ctx.editMessageText(content.text, {
      parse_mode: "HTML",
      reply_markup: content.keyboard,
    });
  } catch (e) {
    await ctx.deleteMessage().catch(() => {});
    await ctx.reply(content.text, {
      parse_mode: "HTML",
      reply_markup: content.keyboard,
    });
  }
  await ctx.answerCallbackQuery();
});

/* ================= 3. СТАРЫЙ КОД (Legacy) ================= */
menuComposer.callbackQuery("menu:find_race", async (ctx) => {
  await findRaceKeyboard.open({ callbackCtx: ctx });
  await ctx.answerCallbackQuery();
});

menuComposer.callbackQuery("menu:top", async (ctx) => {
  await topKeyboard.open({ callbackCtx: ctx });
  await ctx.answerCallbackQuery();
});
menuComposer.callbackQuery(/^top:/, async (ctx) => {
  const action = ctx.callbackQuery.data;
  await topKeyboard.handler({ action, callbackCtx: ctx });
  await ctx.answerCallbackQuery();
});

// RENDER

export async function renderMainMenu(
  ctx: UserContext,
  variant: "new" | "edit" = "new"
) {
  if (!ctx.from?.id) return;
  const content = await getMainMenuContent(ctx.from.id);

  ctx.isVip = content.isVip;

  await userService.registrationTelegram({
    telegramId: ctx.from.id,
    username: ctx.from.username,
  });

  if (variant === "new") {
    await ctx.reply(content.text, {
      parse_mode: "HTML",
      reply_markup: content.keyboard,
    });
  } else {
    await ctx.editMessageText(content.text, {
      parse_mode: "HTML",
      reply_markup: content.keyboard,
    });
  }
}
