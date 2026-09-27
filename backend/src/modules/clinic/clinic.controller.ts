import { Request, Response, NextFunction } from 'express';
import { ClinicService } from './clinic.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class ClinicController {
  static async getInfo(_req: Request, res: Response, next: NextFunction) {
    try {
      const info = await ClinicService.getClinicInfo();
      return ApiResponse.success(res, info, 'اطلاعات کلینیک دریافت شد');
    } catch (error) {
      next(error);
    }
  }

  static async updateSetting(req: Request, res: Response, next: NextFunction) {
    try {
      const setting = await ClinicService.updateSetting(req.body);
      return ApiResponse.success(res, setting, 'تنظیمات با موفقیت ذخیره شد');
    } catch (error) {
      next(error);
    }
  }
}
