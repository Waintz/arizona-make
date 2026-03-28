import { UserContext } from "../../context/context";
import { locationRaceService } from "../../service/location-race.service";
import { raceKeyboard } from "../../keyboards/race.keyboard";
import { notifyService } from "../../service/notify.service";
import {
  RACE_CHANNEL_ID,
  RACE_VIP_CHANNEL_ID,
} from "../../constants/allowedChannels";
import { raceService } from "../../service/race.service";
import { ConversationContext } from "../conversation.context";
import { generateSecretCode } from "../../utils/utils";

export async function forceStartConversation(
  conversation: ConversationContext,
  ctx: UserContext
) {
  if (!ctx.chat?.id) return;

  await ctx.reply("💰 <b>Принудительный старт</b>\n\nВведите приз за гонку:", {
    parse_mode: "HTML",
  });

  const prizeCtx = await conversation.wait();
  if (!prizeCtx.message?.text) {
    await ctx.reply("❌ Это не текст. Отмена.");
    return;
  }
  const prize = prizeCtx.message.text;

  const locations = await conversation.external(() =>
    locationRaceService.getAllLocations()
  );

  // локации
  await ctx.reply("Выберите локация:", {
    reply_markup: raceKeyboard.selectLocation(locations),
  });
  const location = await raceKeyboard.handlerSelectLocation({
    conversation,
    ctx,
    locations,
  });
  if (!location) return;

  // isVip

  await ctx.reply("Выберите доступ:", {
    reply_markup: raceKeyboard.selectIsVip(),
  });
  const accessType = await raceKeyboard.handlerSelectIsVip({
    conversation,
    ctx,
  });
  console.log(accessType);
  if (accessType == undefined) return;


  // time 

  await ctx.reply("Через сколько минут начать:")
  const timeCtx = await conversation.wait();
  if (!timeCtx.message?.text) {
    await ctx.reply("❌ Это не текст. Отмена.");
    return;
  }
  const time = timeCtx.message.text;

  const startTime = new Date();
  startTime.setMinutes(startTime.getMinutes() + Number(time));

  const secretCode = generateSecretCode();

  const race = await conversation.external(async () => {
    return await raceService.forceStart({
      location_id: location.id,
      prize: prize,
      is_vip: accessType,
      secret_code: secretCode,
      start_at: startTime,
      status: "WAITING",
    });
  });

  if (race.status === 200) {
    const CHANNEL_ID = accessType ? RACE_VIP_CHANNEL_ID : RACE_CHANNEL_ID;
  
    await conversation.external(async () => {
      await notifyService.raceAnnouncement(CHANNEL_ID, {
        prize: prize,
        secretCode: secretCode,
        delayMinutes: Number(time),
      });
    });
  
    await ctx.reply(
      `✅ Гонка запланирована на ${startTime.toLocaleTimeString()}! Таймер запущен.`,
    );
  }   else {
    await ctx.reply(
      `❌ Ошибка сервера.`,
    );
  }

}
