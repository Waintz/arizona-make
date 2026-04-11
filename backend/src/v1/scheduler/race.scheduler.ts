import { prisma } from "../../../database/db";
import { updateRaceCache } from "../store/race.store";
import { telegramService } from "../service/telegram.service";
import {
  get_RACE_CHANNEL_ID,
  get_RACE_VIP_CHANNEL_ID,
} from "../types/constants";
import { Prisma } from "../generated/client";

type RaceWithLocation = Prisma.RaceGetPayload<{
  include: { location: true };
}>;

export function initRaceScheduler() {
  // console.log("⏱  Scheduler запущен и следит за гонками...");

  // setInterval(async () => {
  //   await checkRaces();
  // }, 10000);
}

async function checkRaces() {
  // try {
  //   const now = new Date();

  //   const racesToStart = await prisma.race.findMany({
  //     where: {
  //       status: "WAITING",
  //       start_at: { lte: now },
  //     },
  //     include: { location: true },
  //   });

  //   if (racesToStart.length === 0) return;

  //   const greenLightTime = new Date(Date.now() + 20000);

  //   await Promise.all(
  //     racesToStart.map(async (race: RaceWithLocation) => {
  //       const updatedRace = await prisma.race.updateMany({
  //         where: { id: race.id, status: "WAITING" },
  //         data: { status: "STARTED", server_start_time: greenLightTime },
  //       });

  //       if (updatedRace.count === 0) return;

  //       updateRaceCache({
  //         id: race.id,
  //         status: "STARTED",
  //         prize: race.prize,
  //         secret_code: race.secret_code,
  //         is_vip: race.is_vip,
  //         location: race.location,
  //         server_start_time: greenLightTime,
  //       });

  //       const channelId = race.is_vip
  //         ? get_RACE_VIP_CHANNEL_ID()
  //         : get_RACE_CHANNEL_ID();

  //       await telegramService.notifyRaceStarted(
  //         race.location.name,
  //         race.prize,
  //         race.location.file_id,
  //         channelId
  //       );
  //     })
  //   );
  // } catch (error) {
  //   console.error("❌ Ошибка в Scheduler:", error);
  // }
}
