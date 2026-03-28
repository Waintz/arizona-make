import { Bot } from "grammy";
import { UserContext } from "../context/context";

export async function setupCommands(bot: Bot<UserContext>) {
  await bot.api.setMyCommands([
    { command: "start", description: "🚀 Перезапуск бота" },
  ]);
}
