import { prisma } from '../../database/prisma';
import { AppError } from '../../core/errors/AppError';
import { normalizeIranianPhone } from '../../utils/phone';
import {
  CreateAppointmentInput,
  UpdateAppointmentStatusInput,
  AppointmentQueryInput,
} from './appointment.schemas';

export class AppointmentService {
  static async createAppointment(input: CreateAppointmentInput) {
    const normalizedPhone = normalizeIranianPhone(input.phoneNumber) || input.phoneNumber;

    const appointment = await prisma.appointment.create({
      data: {
        fullName: input.fullName.trim(),
        phoneNumber: normalizedPhone,
        consultationTopic: input.consultationTopic,
        shift: input.shift,
        patientMessage: input.patientMessage?.trim() || null,
        status: 'PENDING',
      },
    });

    return appointment;
  }

  static async getAppointments(query: AppointmentQueryInput) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (query.status) {
      where.status = query.status;
    }

    if (query.search) {
      const s = query.search.trim();
      where.OR = [
        { fullName: { contains: s } },
        { phoneNumber: { contains: s } },
        { consultationTopic: { contains: s } },
      ];
    }

    const [total, appointments] = await Promise.all([
      prisma.appointment.count({ where }),
      prisma.appointment.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          handledBy: {
            select: { id: true, fullName: true, role: true },
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      appointments,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    };
  }

  static async getAppointmentById(id: string) {
    const appointment = await prisma.appointment.findUnique({
      where: { id },
      include: {
        handledBy: {
          select: { id: true, fullName: true, role: true },
        },
      },
    });

    if (!appointment) {
      throw AppError.notFound('درخواست نوبت مورد نظر یافت نشد');
    }

    return appointment;
  }

  static async updateAppointmentStatus(
    id: string,
    input: UpdateAppointmentStatusInput,
    handledByUserId?: string
  ) {
    const existing = await prisma.appointment.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('درخواست نوبت مورد نظر یافت نشد');
    }

    const updated = await prisma.appointment.update({
      where: { id },
      data: {
        status: input.status,
        appointmentDate: input.appointmentDate ? new Date(input.appointmentDate) : undefined,
        internalNotes: input.internalNotes !== undefined ? input.internalNotes : undefined,
        handledById: handledByUserId || existing.handledById,
      },
      include: {
        handledBy: {
          select: { id: true, fullName: true, role: true },
        },
      },
    });

    return updated;
  }

  static async deleteAppointment(id: string) {
    const existing = await prisma.appointment.findUnique({ where: { id } });
    if (!existing) {
      throw AppError.notFound('درخواست نوبت مورد نظر یافت نشد');
    }

    await prisma.appointment.delete({ where: { id } });
    return { message: 'درخواست نوبت با موفقیت حذف گردید' };
  }

  static async getAppointmentStats() {
    const [total, pending, contacted, confirmed, completed, cancelled] = await Promise.all([
      prisma.appointment.count(),
      prisma.appointment.count({ where: { status: 'PENDING' } }),
      prisma.appointment.count({ where: { status: 'CONTACTED' } }),
      prisma.appointment.count({ where: { status: 'CONFIRMED' } }),
      prisma.appointment.count({ where: { status: 'COMPLETED' } }),
      prisma.appointment.count({ where: { status: 'CANCELLED' } }),
    ]);

    // Count today's appointments
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const todayCount = await prisma.appointment.count({
      where: {
        createdAt: {
          gte: startOfToday,
        },
      },
    });

    return {
      total,
      pending,
      contacted,
      confirmed,
      completed,
      cancelled,
      todayNew: todayCount,
    };
  }
}
