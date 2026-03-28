import { InlineKeyboard } from "grammy";
import { selectionHelper } from "../../helpers/selection.helper";

export const promoKeyboard = {
  selectPromo() {
    return selectionHelper.createKeyboard([], "promo");
  },

  view() {
    return new InlineKeyboard().text("🔙 Назад в меню", "menu:back");
  }
};
