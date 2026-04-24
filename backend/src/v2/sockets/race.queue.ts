import { Queue, Worker } from "bullmq";
import { redis } from "../services/redis.service";
import { prisma } from "../../../database/db";
import { RoomManager } from "../sockets/room.manager";
import { OutgoingPayload } from "../sockets/types/socket.types";
import { logger } from "../utils/logger";

const QUEUE_NAME = "race-events";

export const raceQueue = new Queue(QUEUE_NAME, { connection: redis });

const raceWorker = new Worker(
  QUEUE_NAME,
  async (job) => {
    const { secretCode, eventType, raceId, startTime } = job.data;

    if (eventType === "GO" && startTime) {
      const isLate = Date.now() - new Date(startTime).getTime() > 5 * 60 * 1000;

      if (isLate) {
        logger.info(
          { queue: QUEUE_NAME, jobId: job.id },
          `🗑️ [BullMQ] Гонка ${secretCode} протухла (сервер лежал). Отменяем.`
        );

        await prisma.race.update({
          where: { id: raceId },
          data: { status: "CANCELLED" },
        });

        const userIds = await redis.smembers(`room:${secretCode}`);
        for (const uid of userIds) {
          await redis.srem(`user:${uid}:rooms`, secretCode);
        }
        await redis.del(`room:${secretCode}`);

        return;
      }
    }

    switch (eventType) {
      case "PREPARING": {
        const payload: OutgoingPayload = {
          event: "race:status",
          data: { status: "PREPARING", seconds: 30 },
        };
        RoomManager.broadcast(secretCode, payload);
        break;
      }

      case "COUNTDOWN": {
        const payload: OutgoingPayload = {
          event: "race:status",
          data: { status: "COUNTDOWN", seconds: 5 },
        };
        RoomManager.broadcast(secretCode, payload);
        break;
      }

      case "GO": {
        const payload: OutgoingPayload = {
          event: "race:status",
          data: { status: "GO" },
          startTime: startTime,
        };
        RoomManager.broadcast(secretCode, payload);

        await prisma.race.update({
          where: { id: raceId },
          data: { status: "STARTED" },
        });
        break;
      }

      case "CLOSED": {
        await prisma.race.update({
          where: { id: raceId },
          data: { status: "CLOSED" },
        });

        const payload: OutgoingPayload = { event: "race:closed", data: {} };
        RoomManager.broadcast(secretCode, payload);

        const userIds = await redis.smembers(`room:${secretCode}`);
        for (const uid of userIds) {
          await redis.srem(`user:${uid}:rooms`, secretCode);
        }
        await redis.del(`room:${secretCode}`);
        await redis.del(`race:finished:${secretCode}`);
        break;
      }
    }
  },
  { connection: redis }
);

raceWorker.on("failed", (job, err) => {
  logger.error(
    {
      jobId: job?.id,
      queue: QUEUE_NAME,
      err: err.message,
      stack: err.stack,
    },
    "Job failed"
  );
});
