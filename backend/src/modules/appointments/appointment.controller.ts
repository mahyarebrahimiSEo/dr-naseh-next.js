import { Request, Response, NextFunction } from 'express';
import { AppointmentService } from './appointment.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class AppointmentController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const appointment = await AppointmentService.createAppointment(req.body);
      return ApiResponse.created(
        res,
        appointment,
        'درخواست نوبت شما با موفقیت ثبت گردید. همکاران پذیرش به زودی با شما تماس خواهند گرفت.'
      );
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { appointments, meta } = await AppointmentService.getAppointments(req.query as any);
      return ApiResponse.success(res, appointments, 'لیست نوبت‌ها دریافت شد', 200, meta);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const appointment = await AppointmentService.getAppointmentById(req.params.id);
      return ApiResponse.success(res, appointment);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const updated = await AppointmentService.updateAppointmentStatus(
        req.params.id,
        req.body,
        req.user?.userId
      );
      return ApiResponse.success(res, updated, 'وضعیت نوبت با موفقیت بروزرسانی شد');
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AppointmentService.deleteAppointment(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }

  static async getStats(_req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await AppointmentService.getAppointmentStats();
      return ApiResponse.success(res, stats, 'آمار نوبت‌ها دریافت شد');
    } catch (error) {
      next(error);
    }
  }
}
