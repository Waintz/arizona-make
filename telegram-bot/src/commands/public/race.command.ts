import { Composer } from "grammy";
import { telegramChannelService } from "../../service/telegam.channel.service";

export const raceComposer = new Composer();

raceComposer.command("race", async (ctx) => {
  if (!ctx.from?.id) return null;

  try {
    await telegramChannelService.sendRaceInvite(ctx.from.id, false);
  } catch (error) {
    console.error(error);
  }
});
