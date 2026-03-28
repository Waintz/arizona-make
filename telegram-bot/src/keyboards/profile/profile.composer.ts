import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { profileMessage } from "../../resources/profile.message";
import { userService } from "../../service/user.service";
import { MESSAGES } from "../../resources/messages";
import { unlinkMessages } from "../../resources/unlink.messages";
import { profileKeyboard } from "./profile.keyboard";
import { linkMessages } from "../../resources/link.message";
import { vipKeyboard } from "../vip/vip.keyboard";
import { identityService } from "../../service/identity.service";
import { authMessage } from "../../resources/auth.message";

export const profileComposer = new Composer<UserContext>();

profileComposer.callbackQuery("menu:profile", async (ctx) => {
  console.log("ctx.from.id", ctx.from.id);
  const gameAccounts = await userService.getAccounts({
    telegramId: ctx.from.id,
  });
  const user = await userService.getUser({ telegramId: ctx.from.id });

  console.log("гейм аккаунтс", gameAccounts.gameAccounts);

  await ctx.editMessageText(
    profileMessage.main({
      gameAccounts: gameAccounts.gameAccounts,
      balance: user.balance,
    }),
    {
      parse_mode: "HTML",
      reply_markup: profileKeyboard.view(),
    }
  );
  await ctx.answerCallbackQuery();
});

profileComposer.callbackQuery("profile:link", async (ctx) => {
  const accounts = await userService.getAccounts({ telegramId: ctx.from.id });

  const isVip =
    ctx.user?.vip_expires_at && new Date(ctx.user.vip_expires_at) > new Date()
      ? true
      : false;

  if (!isVip) {
    if (accounts.gameAccounts.length >= 1) {
      console.log(accounts.gameAccounts.length);
      await ctx.editMessageText(linkMessages.linkLimitError(), {
        parse_mode: "HTML",
        reply_markup: vipKeyboard.offerBuyView(),
      });
      await ctx.answerCallbackQuery();
      return;
    }
  } else {
    if (accounts.gameAccounts.length >= 5) {
      await ctx.editMessageText(linkMessages.linkLimitForVip(), {
        parse_mode: "HTML",
        reply_markup: profileKeyboard.back(),
      });
      await ctx.answerCallbackQuery();
      return;
    }
  }

  const newConnectionCode = await userService.generationConnectCode({
    telegramId: ctx.from!.id,
  });

  if (!newConnectionCode.code) return;

  await ctx.editMessageText(MESSAGES.linkCode(newConnectionCode.code, isVip), {
    parse_mode: "HTML",
    reply_markup: profileKeyboard.back(),
  });
  await ctx.answerCallbackQuery();
});

profileComposer.callbackQuery("profile:unlink", async (ctx) => {
  try {
    const isVip =
      ctx.user?.vip_expires_at && new Date(ctx.user.vip_expires_at) > new Date()
        ? true
        : false;

    if (isVip) {
      const accounts = await userService.getAccounts({
        telegramId: ctx.from!.id,
      });

      console.log("acc", accounts.gameAccounts);

      await ctx.editMessageText("<b>Выберите аккаунт для отвязки:</b>", {
        parse_mode: "HTML",
        reply_markup: profileKeyboard.selectAccount(accounts.gameAccounts),
      });
    } else {
      await ctx.editMessageText(
        "Эта функция доступна только для VIP пользователей, это сделано для безопасности и защиты от читеров.",
        {
          parse_mode: "HTML",
          reply_markup: vipKeyboard.offerBuyView(),
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
  await ctx.answerCallbackQuery();
});

profileComposer.callbackQuery(/^unlink_do:(.+):(.+)$/, async (ctx) => {
  const match = ctx.match;
  const nickname = match[1];
  const server = match[2];

  console.log(nickname, server);

  try {
    console.log("Attempting to unlink account");
    await userService.unlinkedGameAccount({
      nickname: nickname,
      server: Number(server),
    });

    await ctx.editMessageText(unlinkMessages.unlinkSuccess(), {
      parse_mode: "HTML",
      reply_markup: profileKeyboard.back(),
    });
  } catch (error) {
    await ctx.editMessageText(unlinkMessages.unlinkError(), {
      parse_mode: "HTML",
      reply_markup: profileKeyboard.back(),
    });
  }
  await ctx.answerCallbackQuery();
});

profileComposer.callbackQuery("profile:auth", async (ctx) => {
  try {
    const telegramId = ctx.from.id;

    const code = await identityService.createShortLivedCode(telegramId);

    await ctx.editMessageText(authMessage.content(code), {
      parse_mode: "HTML",
      reply_markup: profileKeyboard.back(),
    });

    await ctx.answerCallbackQuery();
  } catch (error) {
    console.error("Auth error:", error);
    await ctx.answerCallbackQuery({
      text: "❌ Ошибка при получении кода. Попробуйте позже.",
      show_alert: true,
    });
  }
});
