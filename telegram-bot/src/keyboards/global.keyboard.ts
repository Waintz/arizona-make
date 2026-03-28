import { Keyboard } from "grammy";

export const globalKeyboard = {
  cancel() {
    return new Keyboard().text("🔙 Отмена").resized();
  },
};
