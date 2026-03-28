import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { developerMessage } from "../../resources/developer.message";
import { developerKeyboard } from "./developer.keyboard";
import { withdrawalService } from "../../service/withdrawal.service";

export const developerComposer = new Composer<UserContext>();

export async function renderDeveloperMenu(ctx: UserContext, messageId?: number) {
  const text = developerMessage.main();
  const keyboard = developerKeyboard.view();

  try {
    await ctx.api.editMessageText(ctx.chat!.id, messageId || ctx.callbackQuery!.message!.message_id, text, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  } catch (e) {
    await ctx.reply(text, {
      parse_mode: "HTML",
      reply_markup: keyboard,
    });
  }
}

developerComposer.callbackQuery("menu:developer", async (ctx) => {
  await ctx.editMessageText(developerMessage.main(), {
    parse_mode: "HTML",
    reply_markup: developerKeyboard.view(),
  });
  await ctx.answerCallbackQuery();
});

developerComposer.callbackQuery("developer:forcestart", async (ctx) => {
  await ctx.conversation.enter("forceStartConversation");

  await ctx.answerCallbackQuery();
});

developerComposer.callbackQuery(
  "developer:withdrawal:requests",
  async (ctx) => {
    const requests = await withdrawalService.getWithdrawalRequests({});

    const page = 1;

    await ctx.editMessageText(developerMessage.withdrawals(), {
      parse_mode: "HTML",
      reply_markup: developerKeyboard.withdrawals({
        page,
        withdrawals: requests.data.withdrawals,
        totalWithdrawals: requests.data.total,
      }),
    });

    await ctx.answerCallbackQuery();
  }
);

developerComposer.callbackQuery(
  /^developer:withdrawal:requests:page:(\d+)$/,
  async (ctx) => {
    const page = Number(ctx.match?.[1]);

    if (isNaN(page) || page < 1) return await ctx.answerCallbackQuery();

    try {
      await ctx.answerCallbackQuery();

      const requests = await withdrawalService.getWithdrawalRequests({
        page: page,
        limit: 6,
      });

      await ctx.editMessageText(developerMessage.withdrawals(), {
        parse_mode: "HTML",
        reply_markup: developerKeyboard.withdrawals({
          page,
          withdrawals: requests.data.withdrawals,
          totalWithdrawals: requests.data.total,
        }),
      });
    } catch (error) {
      console.error("Ошибка пагинации", error);
      await ctx.answerCallbackQuery("Ошибка загрузки страницы");
    }
  }
);

developerComposer.callbackQuery(
  /^developer:withdrawals:request:(\d+)$/,
  async (ctx) => {
    const id = ctx.match?.[1];

    const request = await withdrawalService.getWithdrawalRequests({
      id: Number(id),
      fields: [
        "user",
        "user.game_accounts",
        "amount",
        "currency",
        "wallet_address",
        "status",
      ],
    });

    const data = request.data.withdrawals[0];

    console.log("data", data);

    await ctx.editMessageText(
      developerMessage.withdrawal({
        accounts: data.user.game_accounts,
        amount: data.amount,
        currency: data.currency,
        name: data.user.username,
        status: data.status,
        username: data.username,
        wallet_address: data.wallet_address,
      }),
      {
        parse_mode: "HTML",
        reply_markup: developerKeyboard.withdrawal({ id: Number(id) }),
      }
    );

    console.log(id);
  }
);

developerComposer.callbackQuery(
  /^developer:withdrawals:request:(\d+):approved$/,
  async (ctx) => {
    try {
      const id = ctx.match?.[1];

      const approved = await withdrawalService.approveWithdrawalRequest(Number(id));

      await ctx.editMessageText(developerMessage.withdrawalApproved(), {
        reply_markup: developerKeyboard.back(),
      });
    } catch (error) {}
  }
);

developerComposer.callbackQuery(
  /^developer:withdrawals:request:(\d+):rejected$/,
  async (ctx) => {
    const id = ctx.match?.[1];

    await ctx.conversation.enter("withdrawalRequestRejectedConversation", id);
  }
);
