import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";
import { TokenService } from "../services/token.service";
import { RoomManager } from "./room.manager";
import { IncomingPayload, OutgoingPayload } from "./types/socket.types";
import { SocketRouter } from "./socket.router";
import { redis } from "../services/redis.service";
import { logger } from "../utils/logger";

export interface AuthWebSocket extends WebSocket {
  user?: any;
  isAlive?: boolean;
  currentRoom?: string;
}

export class SocketGateway {
  private static tokenService = new TokenService();

  public static init(server: Server) {
    const wss = new WebSocketServer({ server });

    wss.on("connection", async (ws: AuthWebSocket, req) => {
      ws.isAlive = true;

      const url = new URL(req.url || "", `http://${req.headers.host}`);
      const token = url.searchParams.get("token");

      try {
        if (!token) throw new Error("No token");

        ws.user = this.tokenService.validateAccessToken(token);

        RoomManager.registerClient(ws);

        const activeRooms = await redis.smembers(
          `user:${ws.user.sub || ws.user.id}:rooms`,
        );

        if (activeRooms?.length) {
          ws.currentRoom = activeRooms[0];

          for (const room of activeRooms) {
            await RoomManager.join(room, ws);
          }
        }

        logger.info(
          {
            userId: ws.user.sub || ws.user.id,
            username: ws.user.username,
          },
          "WS connection established",
        );
      } catch (err) {
        logger.error("WS auth failed");
        ws.close();
        return;
      }

      ws.on("message", async (message) => {
        try {
          const parsed = JSON.parse(message.toString());

          if (!parsed?.event) throw new Error("Invalid payload");

          await SocketRouter.handleMessage(ws, parsed as IncomingPayload);
        } catch {
          ws.send(
            JSON.stringify({
              event: "error",
              data: { message: "Invalid format" },
            } as OutgoingPayload),
          );
        }
      });

      ws.on("close", () => {
        logger.info(
          {
            userId: ws.user?.id,
            username: ws.user?.username,
          },
          "WS connection closed",
        );

        RoomManager.unregisterClient(ws);
      });

      ws.on("pong", () => {
        ws.isAlive = true;
      });
    });

    setInterval(() => {
      wss.clients.forEach((client) => {
        const ws = client as AuthWebSocket;

        if (!ws.isAlive) return ws.terminate();

        ws.isAlive = false;
        ws.ping();
      });
    }, 30000);
  }
}
