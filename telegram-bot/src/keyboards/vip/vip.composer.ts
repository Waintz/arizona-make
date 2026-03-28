import { Composer } from "grammy";
import { UserContext } from "../../context/context";
import { vipMessage } from "../../resources/vip.message";
import { paymentService } from "../../service/payments.service";
import { vipKeyboard } from "./vip.keyboard";

export const vipComposer = new Composer<UserContext>();

vipComposer.callbackQuery("menu:vip", async (ctx) => {
  await ctx.editMessageText(vipMessage.main(), {
    parse_mode: "HTML",
    reply_markup: vipKeyboard.view(),
  });
  await ctx.answerCallbackQuery();
});

vipComposer.callbackQuery(/^vip:buy:(?<days>\d+)$/, async (ctx) => {
  try {
    const vipDays = ctx.callbackQuery.data.split(":")[2];

    await ctx.editMessageText(vipMessage.selectPaymentOption(), {
      parse_mode: "HTML",
      reply_markup: vipKeyboard.paymentOptionsView(Number(vipDays)),
    });
    await ctx.answerCallbackQuery();
  } catch (error) {
    console.error(error);
    await ctx.answerCallbackQuery({
      text: "Ошибка сервиса",
      show_alert: true,
    });
  }
});

// оплата на FunPay
vipComposer.callbackQuery(/^vip:buy:(?<days>\d+):funpay$/, async (ctx) => {
  const vipDays = ctx.callbackQuery.data.split(":")[2];

  try {
    await ctx.editMessageText(vipMessage.payViaFunPay(Number(vipDays)), {
      parse_mode: "HTML",
      reply_markup: vipKeyboard.successView(),
    });
  } catch (error) {
    console.error(error);
    await ctx.answerCallbackQuery({
      text: "Ошибка сервиса",
      show_alert: true,
    });
  }
});

// оплата криптой
vipComposer.callbackQuery(/^vip:buy:(?<days>\d+):crypt$/, async (ctx) => {
  try {
    const vipDays = ctx.callbackQuery.data.split(":")[2];

    const result = await paymentService.createPayment({
      telegramId: ctx.from!.id,
    });

    if (result.success) {
      await ctx.editMessageText(
        vipMessage.payViaCrypto("", result.specialCode),
        {
          parse_mode: "HTML",
          reply_markup: vipKeyboard.paymentCryptoView(Number(vipDays)),
        }
      );
    } else {
      await ctx.answerCallbackQuery({
        text: "Ошибка создания платежа",
        show_alert: true,
      });
    }
  } catch (error) {
    console.error(error);
    await ctx.answerCallbackQuery({ text: "Ошибка сервиса", show_alert: true });
  }
});

// проверка оплаты криптой
vipComposer.callbackQuery(
  /^vip:buy:(?<days>\d+):crypt:check_payment$/,
  async (ctx) => {
    await ctx.answerCallbackQuery("⏳ Проверяем платеж...");

    try {
      const check = await paymentService.verifyPayment(
        { telegramId: Number(ctx.from!.id) },
        30
      );

      if (check.success) {
        await ctx.editMessageText(vipMessage.success(), {
          parse_mode: "HTML",
          reply_markup: vipKeyboard.successView(),
        });
      } else {
        await ctx.answerCallbackQuery({
          text: "Оплата еще не найдена. Попробуйте через минуту.",
          show_alert: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
);
