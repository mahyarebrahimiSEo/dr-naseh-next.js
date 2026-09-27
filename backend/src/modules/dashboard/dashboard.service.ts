import { prisma } from '../../database/prisma';

export class DashboardService {
  static async getOverviewStats() {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [
      totalAppointments,
      pendingAppointments,
      confirmedAppointments,
      todayAppointments,
      totalArticles,
      totalServices,
      totalSubscribers,
      recentAppointments,
    ] = await Promise.all([
      prisma.appointment.count(),
      prisma.appointment.count({ where: { status: 'PENDING' } }),
      prisma.appointment.count({ where: { status: 'CONFIRMED' } }),
      prisma.appointment.count({ where: { createdAt: { gte: startOfToday } } }),
      prisma.article.count({ where: { isPublished: true } }),
      prisma.service.count({ where: { isActive: true } }),
      prisma.newsletterSubscriber.count({ where: { isActive: true } }),
      prisma.appointment.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return {
      counters: {
        totalAppointments,
        pendingAppointments,
        confirmedAppointments,
        todayAppointments,
        totalArticles,
        totalServices,
        totalSubscribers,
      },
      recentAppointments,
    };
  }
}
