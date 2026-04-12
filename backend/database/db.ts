import { PrismaClient } from '../src/v2/generated/client';
import { logger } from '../src/v2/utils/logger';

export const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
  ],
});

prisma.$on('error', (e) => {
  logger.error(e, 'Prisma Error');
});

prisma.$on('warn', (e) => {
  logger.warn(e, 'Prisma Warning');
});