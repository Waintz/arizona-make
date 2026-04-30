import { Worker } from "bullmq";
import { raceHandlers } from "./race.handlers";
import { redis } from "../../../services/redis.service";
import { logger } from "../../../utils/logger";
import { raceLifecycle } from "../scheduler/race.lifecycle";
import { RACE_QUEUE_NAME } from "../constants/constants";

export const raceWorker = new Worker(
  RACE_QUEUE_NAME,
  async (job) => {
    switch (job.name) {
      case "check-templates":
        return raceLifecycle.ensureTodayRaces();

      case "prep-event":
        return raceHandlers.preparing(job.data);

      case "count-event":
        return raceHandlers.countdown(job.data);

      case "start-event":
        return raceHandlers.go(job.data);

      case "close-event":
        return raceHandlers.close(job.data);

      default:
        logger.warn({ jobName: job.name }, "Unknown job");
    }
  },
  { connection: redis },
);

raceWorker.on("failed", (job, err) => {
  logger.error({ jobId: job?.id, err }, "Job failed");
});
