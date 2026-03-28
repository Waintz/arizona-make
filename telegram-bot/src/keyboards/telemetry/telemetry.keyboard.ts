import { InlineKeyboard } from "grammy";
import { chunkArray } from "../../utils/utils";
import { paginationKeyboardHelper } from "../../helpers/pagination.helper";

interface TelemetryItem {
  id: number;
  start_at: Date | string;
}

export const telemetryKeyboard = {
  view() {
    return new InlineKeyboard().text("🔙 Назад в меню", "menu:back");
  },

  back() {
    return new InlineKeyboard().text("🔙 Назад", "menu:telemetry");
  },

  viewSelectRace(
    totalRaces: number,
    telemetryData: Array<{ id: number; start_at: Date }>,
    page: number = 1
  ) {
    const keyboard = paginationKeyboardHelper<TelemetryItem>({
      data: telemetryData,
      itemsPerRow: 3,
      limit: 6,
      page: page,
      prefix: "telemetry:page",
      totalData: totalRaces,
      formatButton: (item) => {
        const date = new Date(item.start_at);
        const formattedDate = date.toLocaleString("ru-RU", {
          day: "2-digit",
          month: "2-digit",
        });

        return {
          text: `${formattedDate}`,
          payload: `telemetry:race:${item.id}`,
        };
      },
    });

    return keyboard;
  },
};
