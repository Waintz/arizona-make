import { InlineKeyboard } from "grammy";
import { UserContext } from "../context/context";
import { chunkArray } from "../utils/utils";
import { selectionHelper, SelectOption } from "../helpers/selection.helper";
import { ConversationContext } from "../conversations/conversation.context";
import { Location } from "../api/types/location.types";

export const raceKeyboard = {
  selectLocation(locations: Location[]) {
    const options: SelectOption<Location>[] = locations.map((loc) => ({
      id: String(loc.id),
      label: `📍 ${loc.name}`,
      value: loc,
    }));

    return selectionHelper.createKeyboard(options, "start_loc", true, {
      label: "🎲 Мне повезёт / Случайная",
      id: "random",
    });
  },

  async handlerSelectLocation(data: {
    conversation: ConversationContext;
    locations: Location[];
    ctx: UserContext;
  }) {
    const options: SelectOption<Location>[] = data.locations.map((loc) => ({
      id: String(loc.id),
      label: `📍 ${loc.name}`,
      value: loc,
    }));

    return selectionHelper.handleSelection<Location>({
      conversation: data.conversation,
      ctx: data.ctx,
      prefix: "start_loc",
      items: options,
      getItemName: (loc) => loc.name,
    });
  },

  selectIsVip() {
    const options: SelectOption<boolean>[] = [
      { id: "vip", label: "👑 Только VIP", value: true },
      { id: "all", label: "👤 Для всех", value: false },
    ];

    return selectionHelper.createKeyboard(options, "start_isVip");
  },

  async handlerSelectIsVip(data: {
    conversation: ConversationContext;
    ctx: UserContext;
  }) {
    const options: SelectOption<boolean>[] = [
      { id: "vip", label: "👑 Только VIP", value: true },
      { id: "all", label: "👤 Для всех", value: false },
    ];

    return selectionHelper.handleSelection<boolean>({
      conversation: data.conversation,
      ctx: data.ctx,
      prefix: "start_isVip",
      items: options,
      getItemName: (val) => (val === true ? "👑 VIP Only" : "👤 All Players"),
    });
  },
};
