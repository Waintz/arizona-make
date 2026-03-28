import { Composer } from "grammy";
import { userService } from "../../service/user.service";

export const registrationComposer = new Composer();

registrationComposer.command("registration", async (ctx) => {
  if (!ctx.from?.id) return null;

  const newUser = await userService.registrationTelegram({
    telegramId: ctx.from.id,
    username: ctx.from.username,
  });

  if (newUser) {
    await ctx.reply(`Добро пожаловать, новенький! Твой ID: ${newUser.id}`)
  } else {
    await ctx.reply("С возвращением!");
  }
});
