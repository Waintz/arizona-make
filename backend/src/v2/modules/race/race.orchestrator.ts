import { prisma } from "../../../../database/db";
import { CreateRaceDTO } from "../../schemas/race.schema";
import { auctionService } from "../../services/auction.service";
import { raceScheduler } from "./scheduler/race.scheduler";

export const raceOrchestrator = {
  async createRace(data: CreateRaceDTO["body"]) {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();

    return prisma.$transaction(async (tx) => {
      const race = await tx.race.create({
        data: {
          location_id: data.locationId,
          prize: data.prize,
          prize_type: data.prizeType,
          start_at: data.startAt,
          secret_code: code,
          source: data.source ?? "MANUAL",
          template_id: data.templateId ?? null,
          access_type: data.accessType,
        },
      });

      await raceScheduler.schedule(race);

      if (data.accessType === "AUCTION") {
        const raceTime = data.startAt.getTime();

        const auctionStart = new Date(
          Math.max(Date.now(), raceTime - 60 * 60000),
        );
        const auctionEnd = new Date(
          Math.max(Date.now() + 60_000, raceTime - 30 * 60000),
        );

        await auctionService.createAuction(tx, {
          title: `Race #${race.id}`,
          targetType: "RACE",
          targetId: race.id,
          startAt: auctionStart,
          endAt: auctionEnd,
          openSlots: 3,
          closedSlots: 10,
          hasLuckySlot: true,
        });
      }

      return race;
    });
  },
};
