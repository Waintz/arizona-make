import { Keyboard } from "grammy";
import { UserContext } from "../../context/context";
import { withdrawMessage } from "../../resources/withdraw.message";
import { ConversationContext } from "../conversation.context";
import { globalKeyboard } from "../../keyboards/global.keyboard";
import { menuKeyboard } from "../../keyboards/menu.keyboard";
import { withdrawKeyboard } from "../../keyboards/withdraw/withdraw.keyboard";
import { withdrawalService } from "../../service/withdrawal.service";
import { userService } from "../../service/user.service";

export async function cryptoWithdrawConversation(
  conversation: ConversationContext,
  ctx: UserContext
) {
  if (ctx.from?.id === undefined) {
    await ctx.reply("❌ Ошибка: пользователь не найден.", {
      reply_markup: { remove_keyboard: true },
    });
    return;
  }

  await ctx.editMessageText(withdrawMessage.crypto(), {
    parse_mode: "HTML",
    reply_markup: withdrawKeyboard.back(),
  });

  const { message } = await conversation.waitFor("message:text");

  if (message.text === "🔙 Отмена" || message.text.startsWith("/")) {
    await ctx.reply("❌ Действие отменено.", {
      reply_markup: { remove_keyboard: true },
    });
    return;
  }

  const requisites = message.text.trim().split(" ");

  await ctx.reply(
    `⏳ <b>Вы уверены что все правильно?</b>\n\nВалюта: ${requisites[0]}\nАдрес: ${requisites[1]}`,
    {
      reply_markup: withdrawKeyboard.confirmationRequisites(),
      parse_mode: "HTML",
    }
  );

  const update = await conversation.waitForCallbackQuery([
    "withdraw:confirmRequisites",
    "menu:profile",
  ]);

  await update.answerCallbackQuery();

  if (update.callbackQuery.data === "menu:profile") {
    await update.editMessageText("❌ Оформление вывода отменено.", {
      reply_markup: {
        inline_keyboard: withdrawKeyboard.back().inline_keyboard,
      },
    });
    return;
  }

  try {
    const telegramId = ctx.from.id;
    const user = await userService.getUser({ telegramId });

    if (!user) {
        throw new Error("User not found in DB");
    }

    if (user.balance <= 0) {
       await update.editMessageText(
        `⛔️ <b>Недостаточно средств</b>\n\nВаш баланс: ${user.balance}₽. Вывод невозможен.`,
        {
          parse_mode: "HTML",
          reply_markup: { inline_keyboard: withdrawKeyboard.back().inline_keyboard },
        }
      );
      return; 
    }

    const createdWithdrawal = await withdrawalService.createWithdrawalRequests({
      amount: user.balance,
      userId: user.id,
      requisites: {
        currency: requisites[0],
        walletAddress: requisites[1],
      },
    });

    console.log(`[Withdraw] Success for user ${telegramId}:`, createdWithdrawal);

    await update.editMessageText(
      `✅ <b>Заявка принята!</b>\n\n🟠 Статус: Pending\n💰 Сумма к выводу: ${user.balance}₽\n\n🔶 Ваши деньги на данный момент заморожены.\nОжидайте одобрения`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: withdrawKeyboard.back().inline_keyboard,
        },
      }
    );

    await update.answerCallbackQuery();

  if (update.callbackQuery.data === "menu:profile") {
    await update.editMessageText("❌ Оформление вывода отменено.", {
      reply_markup: {
        inline_keyboard: withdrawKeyboard.back().inline_keyboard,
      },
    });
    return;
  }

  } catch (error) {
    // 6. ОБРАБОТКА ОШИБОК
    console.error(`[Withdraw Error] User: ${ctx.from.id}`, error);

    // Сообщение пользователю (не показываем технические детали)
    await update.editMessageText(
      `⚠️ <b>Произошла ошибка при создании заявки.</b>\n\nПожалуйста, попробуйте позже или обратитесь в поддержку.`,
      {
        parse_mode: "HTML",
        reply_markup: {
           inline_keyboard: withdrawKeyboard.back().inline_keyboard,
        }
      }
    );
  }
}
