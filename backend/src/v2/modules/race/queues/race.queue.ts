import { Queue } from "bullmq";
import { redis } from "../../../services/redis.service";
import { RACE_QUEUE_NAME } from "../constants/constants";

export const raceQueue = new Queue(RACE_QUEUE_NAME, { connection: redis });