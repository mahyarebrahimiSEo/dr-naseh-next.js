import { Request, Response, NextFunction } from 'express';
import { ClinicServicesService } from './service.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class ClinicServicesController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const services = await ClinicServicesService.getServices(req.query as any);
      return ApiResponse.success(res, services, 'لیست خدمات کلینیک دریافت شد');
    } catch (error) {
      next(error);
    }
  }

  static async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const service = await ClinicServicesService.getServiceBySlug(req.params.slug);
      return ApiResponse.success(res, service);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const service = await ClinicServicesService.createService(req.body);
      return ApiResponse.created(res, service, 'خدمت درمانی با موفقیت افزوده شد');
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const service = await ClinicServicesService.updateService(req.params.id, req.body);
      return ApiResponse.success(res, service, 'خدمت درمانی بروزرسانی شد');
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await ClinicServicesService.deleteService(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }
}
