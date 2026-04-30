import { Prisma } from "../../../generated";
import { raceQueue } from "../queues/race.queue";

export const raceScheduler = {
  async schedule(race: Prisma.$RacePayload["scalars"]) {
    const startTime = new Date(race.start_at).getTime();
    const now = Date.now();


    const delayStart = Math.trunc(startTime - now);

    const delay30s = startTime - 30000 - now;
    const delay5s = startTime - 5000 - now;

    if (delay30s > 0) {
      await raceQueue.add(
        "prep-event",
        {
          secretCode: race.secret_code,
          eventType: "PREPARING",
          raceId: race.id,
        },
        {
          delay: delay30s,
          jobId: `prep-${race.id}`,
        },
      );
    }

    if (delay5s > 0) {
      await raceQueue.add(
        "count-event",
        {
          secretCode: race.secret_code,
          eventType: "COUNTDOWN",
          raceId: race.id,
        },
        {
          delay: delay5s,
          jobId: `count-${race.id}`,
        },
      );
    }

    await raceQueue.add(
      "start-event",
      {
        secretCode: race.secret_code,
        eventType: "GO",
        raceId: race.id,
        startTime: race.start_at,
      },
      {
        delay: Math.max(0, delayStart),
        jobId: `go-${race.id}`,
      },
    );
  },
};

export const initRaceScheduledJobs = async () => {
  await raceQueue.add(
    "check-templates",
    {},
    {
      repeat: {
        pattern: "*/5 * * * *",
      },
      jobId: "race-lifecycle-cron",
    },
  );

  console.log("⏰ [Scheduler] Race lifecycle job initialized");
};
