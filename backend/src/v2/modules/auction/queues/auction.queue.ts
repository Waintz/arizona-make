import { Queue } from "bullmq";
import { redis } from "../../../services/redis.service";
import { AUCTION_QUEUE_NAME } from "../constants/constants";

export const auctionQueue = new Queue(AUCTION_QUEUE_NAME, { connection: redis });