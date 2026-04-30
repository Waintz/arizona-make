interface RaceBaseArgs {
  secretCode: string;
}

interface RaceIdArgs extends RaceBaseArgs {
  raceId: number;
}

interface RaceGoArgs extends RaceIdArgs {
  startTime: string;
}

import { prisma } from "../../../../../database/db";
import { redis } from "../../../services/redis.service";
import { RoomManager } from "../../../sockets/room.manager";
import { OutgoingPayload } from "../../../sockets/types/socket.types";

export const raceHandlers = {
  async preparing({ secretCode }: RaceBaseArgs): Promise<void> {
    const payload: OutgoingPayload = {
      event: "race:status",
      data: { status: "PREPARING", seconds: 30 },
    };
    await RoomManager.broadcast(secretCode, payload);
  },

  async countdown({ secretCode }: RaceBaseArgs): Promise<void> {
    const payload: OutgoingPayload = {
      event: "race:status",
      data: { status: "COUNTDOWN", seconds: 5 },
    };
    await RoomManager.broadcast(secretCode, payload);
  },

  async go({ secretCode, raceId, startTime }: RaceGoArgs): Promise<void> {
    const isLate = Date.now() - new Date(startTime).getTime() > 5 * 60 * 1000;

    if (isLate) {
      await prisma.race.update({
        where: { id: raceId },
        data: { status: "CANCELLED" },
      });
      return;
    }

    await RoomManager.broadcast(secretCode, {
      event: "race:status",
      data: { status: "GO" },
      startTime,
    });

    await prisma.race.update({
      where: { id: raceId },
      data: { status: "STARTED" },
    });
  },

  async close({ secretCode, raceId }: RaceIdArgs): Promise<void> {
    await prisma.race.update({
      where: { id: raceId },
      data: { status: "CLOSED" },
    });

    await RoomManager.broadcast(secretCode, {
      event: "race:closed",
      data: {},
    });

    const roomKey = `room:${secretCode}`;
    const userIds: string[] = await redis.smembers(roomKey);

    const pipeline = redis.pipeline();
    for (const uid of userIds) {
      pipeline.srem(`user:${uid}:rooms`, secretCode);
    }

    pipeline.del(roomKey);
    pipeline.del(`race:finished:${secretCode}`);

    await pipeline.exec();
  },
};