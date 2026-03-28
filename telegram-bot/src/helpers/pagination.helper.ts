import { InlineKeyboard } from "grammy";
import { chunkArray } from "../utils/utils";

interface PaginationProps<T> {
  data: T[];
  totalData: number;
  limit: number; 
  itemsPerRow: number; 
  page: number;
  prefix: string; 
  back?: [string, string]
  formatButton: (item: T) => { text: string; payload: string };
}

export const paginationKeyboardHelper = <T>({
  data,
  formatButton,
  itemsPerRow,
  limit,
  page,
  prefix,
  totalData,
  back
}: PaginationProps<T>) => {
  const keyboard = new InlineKeyboard();

  const rows = chunkArray(data, itemsPerRow);

  rows.forEach((rowItems) => {
    rowItems.forEach((item) => {
      const { text, payload } = formatButton(item);
      keyboard.text(text, payload);
    });
    keyboard.row();
  });

  const totalPages = Math.ceil(totalData / limit);

  if (page > 1) {
    keyboard.text("⬅️", `${prefix}:${page - 1}`);
  } else {
    keyboard.text("·", "noop");
  }

  keyboard.text(`${page}/${totalPages > 0 ? totalPages : 1}`, "noop");

  if (page < totalPages) {
    keyboard.text("➡️", `${prefix}:${page + 1}`);
  } else {
    keyboard.text("·", "noop");
  }

  if (back) {
    keyboard.row().text(back[0], back[1]);    
  } else {
    keyboard.row().text("🔙 Назад в меню", "menu:back");    
  }


  return keyboard;
};
