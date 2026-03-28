import { InlineKeyboard } from "grammy";
import { paginationKeyboardHelper } from "../../helpers/pagination.helper";
import { WithdrawalRequest } from "../../api/types/withdrawal.types";

export const withdrawalKeyboard = {
  view({
    withdrawals,
    page = 1,
    totalWithdrawals,
  }: {
    withdrawals: Pick<WithdrawalRequest, "id" | "status" | "created_at">[];
    page: number;
    totalWithdrawals: number;
  }) {
    const statusEmojis = {
      PENDING: "⏳",
      APPROVED: "✅",
      REJECTED: "❌",
    };

    const keyboard = paginationKeyboardHelper({
      data: withdrawals,
      itemsPerRow: 3,
      limit: 6,
      page: page,
      prefix: "withdrawals:page",
      totalData: totalWithdrawals,
      formatButton: (item) => {
        const date = new Date(item.created_at);
        const formattedDate = date.toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
        });

        return {
          text: `${statusEmojis[item.status]} ${formattedDate}`,
          payload: `withdrawals:request:${item.id}`,
        };
      },
      back: ["🔙 Назад", "menu:profile"]
    });

    return keyboard;
  },

  back() {
    return new InlineKeyboard().text("🔙 Назад", "menu:profile");
  },
};
