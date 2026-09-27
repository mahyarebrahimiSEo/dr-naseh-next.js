import { PrismaClient } from '@prisma/client';
import { isDevelopment } from '../config';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: isDevelopment ? ['error', 'warn'] : ['error'],
  });

if (isDevelopment) {
  global.prisma = prisma;
}
