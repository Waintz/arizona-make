import { prisma } from "../../../../../database/db";
import { redis } from "../../../services/redis.service";
import { timeService } from "../../../services/time.service";
import { logger } from "../../../utils/logger";
import { raceOrchestrator } from "../race.orchestrator";

const LOCK_KEY = "race:ensure:lock";

export const raceLifecycle = {
  async ensureTodayRaces() {
    const lock = await redis.set(LOCK_KEY, "1", "EX", 10, "NX");

    if (!lock) return;

    try {
      const now = new Date();

      const today = new Date(now);
      today.setHours(0, 0, 0, 0);

      const templates = await prisma.raceTemplate.findMany({
        where: {
          day_of_week: today.getDay(),
          is_active: true,
        },
      });

      for (const template of templates) {
        const startAt = timeService.buildDate(template.time, today);

        if (startAt.getTime() < Date.now()) continue;

        const exists = await prisma.race.findFirst({
          where: {
            template_id: template.id,
            start_at: startAt,
          },
        });

        if (exists) continue;

        await raceOrchestrator.createRace({
          locationId: template.location_id,
          prize: template.prize,
          prizeType: template.prize_type,
          startAt,
          accessType: template.access_type,
          source: "SCHEDULED",
          templateId: template.id,
        });
      }
    } finally {
      await redis.del(LOCK_KEY);
    }
  },
};
