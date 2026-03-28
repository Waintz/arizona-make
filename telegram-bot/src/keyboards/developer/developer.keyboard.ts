import { InlineKeyboard } from "grammy";
import { paginationKeyboardHelper } from "../../helpers/pagination.helper";
import { WithdrawalRequest, WithdrawalStatus } from "../../api/types/withdrawal.types";

export const developerKeyboard = {
  view() {
    return new InlineKeyboard()
      .text("📩 Заявки на вывод средств", "developer:withdrawal:requests")
      .row()
      .text("📃 Рассылка", "broadcast")
      .text("🏁 Запустить гонку", "developer:forcestart")
      .row()
      .text("🔙 Назад в меню", "menu:back");
  },

  withdrawals({
    withdrawals,
    page = 1,
    totalWithdrawals,
  }: {
    withdrawals: Pick<WithdrawalRequest, "id" | "status" | "created_at">[];
    page: number;
    totalWithdrawals: number;
  }) {
    const statusEmojis: Record<WithdrawalStatus, string> = {
      PENDING: "⏳",
      APPROVED: "✅",
      REJECTED: "❌",
    };

    const keyboard = paginationKeyboardHelper({
      data: withdrawals,
      itemsPerRow: 3,
      limit: 6,
      page: page,
      prefix: "developer:withdrawal:requests:page",
      totalData: totalWithdrawals,
      formatButton: (item) => {
        const date = new Date(item.created_at);
        const formattedDate = date.toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
        });

        return {
          text: `${statusEmojis[item.status]} ${formattedDate}`,
          payload: `developer:withdrawals:request:${item.id}`,
        };
      },
      back: ["🔙 Назад", "menu:developer"],
    });

    return keyboard;
  },

  withdrawal({ id }: { id: number }) {
    const keyboard = new InlineKeyboard()
      .text("✅ Одобрить", `developer:withdrawals:request:${id}:approved`)
      .text("❌ Отклонить", `developer:withdrawals:request:${id}:rejected`)
      .row()
      .text("🔙 Назад", `develoepr:withdrawals`);

    return keyboard;
  },

  back() {
    return new InlineKeyboard().text(
      "🔙 Назад",
      "developer:withdrawal:requests"
    );
  },
};
