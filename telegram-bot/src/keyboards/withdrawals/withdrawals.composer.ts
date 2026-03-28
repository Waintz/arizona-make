import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { withdrawalsMessage } from "../../resources/withdrawals.messae";
import { withdrawalService } from "../../service/withdrawal.service";
import { withdrawalKeyboard } from "./withdrawals.keyboard";

export const withdrawalsComposer = new Composer<UserContext>();

withdrawalsComposer.callbackQuery("profile:withdrawals", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Загружаем заявки...." });

  const requests = await withdrawalService.getWithdrawalRequests({
    identifier: { telegramId: ctx.from.id },
  });

  const page = 1;

  console.log(requests);

  await ctx.editMessageText(withdrawalsMessage.main(), {
    parse_mode: "HTML",
    reply_markup: withdrawalKeyboard.view({
      page,
      withdrawals: requests.data.withdrawals,
      totalWithdrawals: requests.data.total,
    }),
  });

  await ctx.answerCallbackQuery();
});

withdrawalsComposer.callbackQuery(/^withdrawals:page:(\d+)$/, async (ctx) => {
  const page = Number(ctx.match?.[1]);

  if (isNaN(page) || page < 1) return await ctx.answerCallbackQuery();

  try {
    await ctx.answerCallbackQuery();

    const requests = await withdrawalService.getWithdrawalRequests({
      identifier: { telegramId: ctx.from.id },
      page: page,
      limit: 6,
    });

    await ctx.editMessageText(withdrawalsMessage.main(), {
      parse_mode: "HTML",
      reply_markup: withdrawalKeyboard.view({
        page,
        withdrawals: requests.data.withdrawals,
        totalWithdrawals: requests.data.total,
      }),
    });
  } catch (error) {
    console.error("Ошибка пагинации", error);
    await ctx.answerCallbackQuery("Ошибка загрузки страницы");
  }
});

withdrawalsComposer.callbackQuery(
  /^withdrawals:request:(\d+)$/,
  async (ctx) => {
    const id = ctx.match?.[1];

    const withdrawalData = await withdrawalService.getWithdrawalRequests({
      id: Number(id),
      fields: [
        "amount",
        "currency",
        "wallet_address",
        "status",
        "created_at",
        "id",
        "tx_hash",
        "rejection_reason",
        "admin_comment",
      ],
    });

    if (
      !withdrawalData.data.withdrawals ||
      withdrawalData.data.withdrawals.length === 0
    ) {
      return ctx.editMessageText(withdrawalsMessage.notFound(), {
        reply_markup: withdrawalKeyboard.back(),
      });
    }

    const withdrawalItem = withdrawalData.data.withdrawals[0];

    console.log(withdrawalItem);

    await ctx.editMessageText(withdrawalsMessage.viewRequest(withdrawalItem), {
      reply_markup: withdrawalKeyboard.back(),
      parse_mode: "Markdown",
    });
  }
);
