import { Worker } from "bullmq";
import { logger } from "../../../utils/logger";
import { redis } from "../../../services/redis.service";
import { AUCTION_QUEUE_NAME } from "../constants/constants";
import { auctionHandlers } from "./auction.handler";

export const auctionWorker = new Worker(
  AUCTION_QUEUE_NAME,
  async (job) => {
    switch (job.name) {
      case "open-auction":
        return auctionHandlers.openAuction(job.data);

      case "close-auction":
        return auctionHandlers.closeAuction(job.data);

      default:
        logger.warn({ jobName: job.name }, "Unknown job");
    }
  },
  {
    connection: redis,
    concurrency: 5,
    removeOnComplete: { count: 100 },
    removeOnFail: { count: 500 },
  },
);

auctionWorker.on("failed", (job, err) => {
  logger.error({ jobId: job?.id, err }, "Job failed");
});
