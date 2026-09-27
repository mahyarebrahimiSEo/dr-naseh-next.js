import { Request, Response, NextFunction } from 'express';
import { GalleryService } from './gallery.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class GalleryController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const items = await GalleryService.getItems(req.query.category as string);
      return ApiResponse.success(res, items, 'آیتم‌های گالری دریافت شد');
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await GalleryService.createItem(req.body);
      return ApiResponse.created(res, item, 'تصویر با موفقیت به گالری اضافه شد');
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await GalleryService.updateItem(req.params.id, req.body);
      return ApiResponse.success(res, item, 'تصویر گالری بروزرسانی شد');
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await GalleryService.deleteItem(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }
}
