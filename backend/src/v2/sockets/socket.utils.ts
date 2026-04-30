import { RoomManager } from "./room.manager";
import { OutgoingPayload } from "./types/socket.types";

export const SocketEmitter = {
  toRoom(room: string, payload: OutgoingPayload) {
    RoomManager.broadcast(room, payload);
  }
};