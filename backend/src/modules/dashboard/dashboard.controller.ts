import { Request, Response, NextFunction } from 'express';
import { DashboardService } from './dashboard.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class DashboardController {
  static async getOverview(_req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await DashboardService.getOverviewStats();
      return ApiResponse.success(res, stats, 'داشبورد مدیریتی بارگذاری شد');
    } catch (error) {
      next(error);
    }
  }
}
