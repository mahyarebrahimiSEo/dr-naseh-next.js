import { createApp } from './app';
import { env } from './config';
import { logger } from './utils/logger';
import { prisma } from './database/prisma';

async function bootstrap() {
  try {
    // 1. Verify Database Connection
    await prisma.$connect();
    logger.info('✅ پایگاه داده با موفقیت متصل گردید (SQLite Database Ready)');

    // 2. Initialize Express Application
    const app = createApp();

    // 3. Start Listening
    const server = app.listen(env.PORT, () => {
      logger.info(`🚀 سرور با موفقیت روی پورت ${env.PORT} راه‌اندازی شد`);
      logger.info(`🌐 آدرس اصلی API: http://localhost:${env.PORT}/api/v1`);
      logger.info(`🩺 چک وضعیت سلامت: http://localhost:${env.PORT}/health`);
    });

    // 4. Graceful Shutdown Handlers
    const shutdown = async (signal: string) => {
      logger.warn(`سیگنال ${signal} دریافت شد. در حال قطع ارتباط و خاتمه امن سرور...`);
      server.close(async () => {
        logger.info('اتصالات HTTP خاتمه یافتند.');
        await prisma.$disconnect();
        logger.info('اتصال به پایگاه داده با موفقیت قطع شد.');
        process.exit(0);
      });

      // Force close if graceful shutdown hangs
      setTimeout(() => {
        logger.error('خاتمه اجباری به دلیل طولانی شدن فرآیند بستن سرویس.');
        process.exit(1);
      }, 5000);
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));

    // Handle Uncaught Exceptions & Rejections
    process.on('uncaughtException', (err) => {
      logger.error('Uncaught Exception occurred:', err);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason) => {
      logger.error('Unhandled Rejection occurred:', reason);
    });
  } catch (error) {
    logger.error('خطای بحرانی هنگام راه‌اندازی سرور:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();
