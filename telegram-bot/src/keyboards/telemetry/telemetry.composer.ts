import { Composer, InputFile } from "grammy";
import { UserContext } from "../../context/context";
import { telemetryMessage } from "../../resources/telemetry.message";
import { mapService, RawCoord } from "../../service/map.service";
import { telemetryKeyboard } from "./telemetry.keyboard";
import { raceService } from "../../service/race.service";
import { vipGuardMiddleware } from "../../middleware/vipGuard.middleware";

export const telemetryComposer = new Composer<UserContext>();

const protectedRoute = telemetryComposer.filter((ctx) => {
  const data = ctx.callbackQuery?.data;
  if (!data) return false;
  return data === "menu:telemetry" || data.startsWith("telemetry:");
});

protectedRoute.use(vipGuardMiddleware);

protectedRoute.callbackQuery("menu:telemetry", async (ctx) => {
  await ctx.answerCallbackQuery({ text: "Загружаем заезды...." });

  try {
    const page = 1;

    const telemetry = await raceService.getRacePaths(page, 6);

    await ctx.editMessageText("Данные загружены, выберите заезд.", {
      reply_markup: telemetryKeyboard.viewSelectRace(
        telemetry.data.total,
        telemetry.data.telemetryData,
        page
      ),
    });
  } catch (error) {
    console.error("Ошибка телеметрии", error);
    await ctx.reply("Произошла ошибка при загрузке карты.", {
      reply_markup: telemetryKeyboard.view(),
    });
  }
});

protectedRoute.callbackQuery(/^telemetry:race:(\d+)$/, async (ctx) => {
  const id = ctx.match?.[1];

  console.log(id);

  const telemetryData = await raceService.getRacePath(Number(id));

  if (
    !telemetryData.data.telemetryData ||
    !telemetryData.data.telemetryData.winner_path
  ) {
    await ctx.editMessageText("Данных о этом заезде нету.", {
      reply_markup: telemetryKeyboard.back(),
    });
    return;
  }

  const pathArray = telemetryData.data.telemetryData
    .winner_path as unknown as RawCoord[];
  const mapBuffer = await mapService.generateMapPreview(pathArray);

  if (!mapBuffer) {
    await ctx.editMessageText(
      "Не удалось сгенерировать карту (слишком мало точек).",
      {
        reply_markup: telemetryKeyboard.back(),
      }
    );
    return;
  }

  await ctx.deleteMessage().catch(() => {});

  await ctx.replyWithPhoto(new InputFile(mapBuffer), {
    caption: telemetryMessage.main(),
    parse_mode: "HTML",
    reply_markup: telemetryKeyboard.view(),
  });
});

protectedRoute.callbackQuery(/^telemetry:page:(\d+)$/, async (ctx) => {
  const page = Number(ctx.match?.[1]);

  if (isNaN(page) || page < 1) return await ctx.answerCallbackQuery();

  try {
    await ctx.answerCallbackQuery();

    const telemetry = await raceService.getRacePaths(page, 6);

    await ctx.editMessageText(`Страница ${page}. Выберите заезд:`, {
      reply_markup: telemetryKeyboard.viewSelectRace(
        telemetry.data.total,
        telemetry.data.telemetryData,
        page
      ),
    });
  } catch (error) {
    console.error("Ошибка пагинации", error);
    await ctx.answerCallbackQuery("Ошибка загрузки страницы");
  }
});

telemetryComposer.callbackQuery("noop", async (ctx) => {
  await ctx.answerCallbackQuery("Кнопка недоступна в данный момент.");
});
