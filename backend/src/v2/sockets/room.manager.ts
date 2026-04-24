import { AuthWebSocket } from "./socket.gateway";
import { redis } from "../services/redis.service";
import { OutgoingPayload } from "./types/socket.types";
import { logger } from "../utils/logger";

export class RoomManager {
  private static localClients = new Map<string, AuthWebSocket>();

  public static registerClient(ws: AuthWebSocket) {
    const userId = ws.user?.sub || ws.user?.id;
    if (userId) {
      this.localClients.set(String(userId), ws);
    }
  }

  public static unregisterClient(ws: AuthWebSocket) {
    const userId = ws.user?.sub || ws.user?.id;
    if (userId) {
      this.localClients.delete(String(userId));
    }
  }

  public static async join(roomId: string, ws: AuthWebSocket) {
    const userId = ws.user?.sub || ws.user?.id;
    if (!userId) return;

    await this.leaveAll(ws);

    await redis.sadd(`room:${roomId}`, String(userId));

    await redis.sadd(`user:${userId}:rooms`, roomId);

    ws.currentRoom = roomId;
    logger.info(
      { userId, roomId },
      `[Room] 👤 ${ws.user.username} вошел в комнату: ${roomId}`
    );
  }

  public static async leave(roomId: string, ws: AuthWebSocket) {
    const userId = ws.user?.sub || ws.user?.id;
    if (!userId) return;

    await redis.srem(`room:${roomId}`, String(userId));

    await redis.srem(`user:${userId}:rooms`, roomId);

    ws.currentRoom = undefined;
    logger.info(
      { userId, roomId },
      `[Room] 🚪 ${ws.user.username} покинул комнату: ${roomId}`
    );
  }

  public static async leaveAll(ws: AuthWebSocket) {
    if (ws.currentRoom) {
      await this.leave(ws.currentRoom, ws);
    }
  }

  public static async broadcast(
    roomId: string,
    payload: OutgoingPayload,
    excludeWs?: AuthWebSocket
  ) {
    const userIds = await redis.smembers(`room:${roomId}`);
    if (!userIds || userIds.length === 0) return;

    const message = JSON.stringify(payload);

    userIds.forEach((idStr) => {
      const clientWs = this.localClients.get(idStr);

      if (clientWs && clientWs !== excludeWs && clientWs.readyState === 1) {
        clientWs.send(message);
      }
    });
  }
}
