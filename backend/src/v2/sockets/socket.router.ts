import { AuthWebSocket } from './socket.gateway';
import { RoomManager } from './room.manager';
import { IncomingPayload, OutgoingPayload } from './types/socket.types';
import { prisma } from '../../../database/db'; // <-- Обязательно проверь путь к твоей призме

export class SocketRouter {
  public static async handleMessage(ws: AuthWebSocket, payload: IncomingPayload) {
    switch (payload.event) {
      case 'room:join': {
        const roomId = payload.data.roomId;
        
        const race = await prisma.race.findFirst({
          where: { 
            secret_code: roomId,
            status: 'WAITING'
          }
        });

        if (!race) {
          const errorResponse: OutgoingPayload = { 
            event: 'error', 
            data: { message: 'Гонка не найдена или уже недоступна для входа' } 
          };
          ws.send(JSON.stringify(errorResponse));
          return;
        }

        await RoomManager.join(roomId, ws); 
        
        const response: OutgoingPayload = { event: 'room:joined', data: { roomId } };
        ws.send(JSON.stringify(response));
        
        break;
      }

      case 'room:leave': {
        if (ws.currentRoom) {
          const room = ws.currentRoom;
          
          await RoomManager.leave(room, ws);

          const response: OutgoingPayload = { event: 'room:left', data: { roomId: room } };
          ws.send(JSON.stringify(response));
        }
        break;
      }

      default: {
        const _exhaustiveCheck: never = payload;
      }
    }
  }
}