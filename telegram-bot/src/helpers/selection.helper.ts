import { InlineKeyboard } from "grammy";
import { UserContext } from "../context/context";
import { chunkArray } from "../utils/utils";
import { ConversationContext } from "../conversations/conversation.context";

export interface SelectOption<T> {
  id: string;
  label: string;
  value: T;
}

interface HandleSelectionOption<T> {
  conversation: ConversationContext;
  ctx: UserContext;
  prefix: string;
  items: SelectOption<T>[];
  isReturnText?: boolean;
  getItemName?: (item: T) => string;
}

export const selectionHelper = {
  createKeyboard<T>(
    items: SelectOption<T>[],
    prefix: string,
    cancel: boolean = true,
    topButton?: { label: string; id: string }
  ) {
    const keyboard = new InlineKeyboard();

    if (topButton) {
      keyboard.text(topButton.label, `${prefix}:${topButton.id}`).row();
    }

    const rows = chunkArray(items, 2);
    rows.forEach((rowItems) => {
      rowItems.forEach((item) => {
        keyboard.text(item.label, `${prefix}:${item.id}`);
      });
      keyboard.row();
    });

    if (cancel) {
      keyboard.text("🔙 Вернуться на главную", `${prefix}:cancel`);
    }

    return keyboard;
  },

  async handleSelection<T>(
    data: HandleSelectionOption<T>
  ): Promise<T | undefined> {
    const { conversation, items, prefix, getItemName } = data;

    console.log("items", items)

    const callbackCtx = await conversation.waitForCallbackQuery(
      new RegExp(`^${prefix}:`)
    );

    await callbackCtx.answerCallbackQuery();

    const action = callbackCtx.callbackQuery.data.split(":")[1];

    if (action === "cancel") {
      if (data.isReturnText) {
        await callbackCtx.editMessageText("✖️ <b>Выбор отменен.</b>", {
          parse_mode: "HTML",
        });
      }

      return undefined;
    }

    let selectedItem: T | undefined;

    if (action === "random") {
      if (items.length > 0) {
        const randomOption = items[Math.floor(Math.random() * items.length)];
        selectedItem = randomOption.value;
      }
    } else {
      const option = items.find((i) => i.id === action);
      selectedItem = option?.value;
    }

    if (selectedItem == undefined) {
      console.log("я сработал")
      await callbackCtx.answerCallbackQuery({
        text: "⚠️ Эта опция недоступна или устарела.",
        show_alert: true,
      });

      return this.handleSelection(data);
    }


    const nameText = getItemName
      ? getItemName(selectedItem)
      : String(selectedItem);


    if (data.isReturnText) {
      await callbackCtx.editMessageText(`✅ Выбрано: <b>${nameText}</b>`, {
        parse_mode: "HTML",
      });
    }

    return selectedItem;
  },
};
