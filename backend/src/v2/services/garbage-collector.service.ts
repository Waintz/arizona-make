import { prisma } from '../../../database/db';
import { redis } from './redis.service';

// DEBUG ОБЯЗАТЕЛЬНО ПОМЕНЯТЬ НА 60 МИНУТ

export const startGarbageCollector = () => {
  setInterval(async () => {
    try {
      const oneHourAgo = new Date(Date.now() - 1 * 60 * 1000);

      const zombieRaces = await prisma.race.findMany({
        where: {
          status: 'STARTED',
          start_at: { lt: oneHourAgo }
        }
      });

      for (const race of zombieRaces) {
        console.log(`🧹 [GC] Закрываем зомби-гонку: ${race.secret_code}`);
        
        await prisma.race.update({
          where: { id: race.id },
          data: { status: 'FINISHED' }
        });

        const userIds = await redis.smembers(`room:${race.secret_code}`);
        for (const uid of userIds) {
          await redis.srem(`user:${uid}:rooms`, race.secret_code);
        }
        
        await redis.del(`room:${race.secret_code}`);
        await redis.del(`race:finished:${race.secret_code}`);
      }
    } catch (error) {
      console.error('[GC] Ошибка очистки мусора:', error);
    }
  }, 5000);
};