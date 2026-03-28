import dotenv from "dotenv";

dotenv.config();

import { Bot, session } from "grammy";
import { UserContext } from "./src/context/context";
import { conversations, createConversation } from "@grammyjs/conversations";

// Middleware
import { authMiddleware, requireAuth } from "./src/middleware/auth.middleware";
import { chatGuardMiddleware } from "./src/middleware/chat.guard.middleware";

// Conversations
import { forceStartConversation } from "./src/conversations/admin/force-start.conversation";
import { promoConversation } from "./src/conversations/public/promo.conversation";
import { broadcastConversation } from "./src/conversations/public/broadcast.conversation";
import { cryptoWithdrawConversation } from "./src/conversations/public/cryptoWithdraw.conversation";
import { withdrawalRequestRejectedConversation } from "./src/conversations/public/withdrawalRequestRejected.conversation";

// Composers/Commands
import { raceComposer } from "./src/commands/public/race.command";
import { joinComposer } from "./src/handlers/join.handler";
import { sendFileIdComposer } from "./src/handlers/send.file.id.handler";
import { promoComposer } from "./src/commands/public/promo.command";
import { menuComposer } from "./src/features/menu/menu.composer";
import { setupCommands } from "./src/setup-commands/setup-comands";

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const token = process.env.TOKEN_TELEGRAM_BOT;
if (!token) throw new Error("TOKEN_TELEGRAM_BOT is missing!");

export const bot = new Bot<UserContext>(token);

setupCommands(bot);
bot.use(session({ initial: () => ({}) }));

// 1. Global Middleware
bot.use(chatGuardMiddleware);
bot.use(authMiddleware);


// 2. Conversation registration
bot.use(conversations());
bot.use(createConversation(forceStartConversation));
bot.use(createConversation(broadcastConversation));
bot.use(createConversation(cryptoWithdrawConversation));
bot.use(createConversation(withdrawalRequestRejectedConversation));
bot.use(createConversation(promoConversation));

// 3. Handlers
bot.use(joinComposer);

// 4. Public commands
bot.use(menuComposer);

// 3. ADMIN / PROTECTED COMMANDS
bot.use(requireAuth).use(raceComposer);
bot.use(requireAuth).use(promoComposer);
bot
  .filter((ctx) => ctx.chat?.id === process.env.ASSETS_CHANNEL_ID)
  .use(sendFileIdComposer);

bot.start({
  onStart: (botInfo) => {
    console.log(`✅ Бот @${botInfo.username} успешно работает!`);
  },
});

bot.catch((err) => console.error("Bot Error:", err));
