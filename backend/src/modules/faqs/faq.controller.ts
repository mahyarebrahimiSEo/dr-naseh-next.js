import { Request, Response, NextFunction } from 'express';
import { FaqService } from './faq.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class FaqController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const faqs = await FaqService.getFaqs(req.query.category as string);
      return ApiResponse.success(res, faqs, 'پرسش‌های متداول دریافت شد');
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const faq = await FaqService.createFaq(req.body);
      return ApiResponse.created(res, faq, 'سوال متداول با موفقیت ایجاد شد');
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const faq = await FaqService.updateFaq(req.params.id, req.body);
      return ApiResponse.success(res, faq, 'سوال متداول با موفقیت ویرایش شد');
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await FaqService.deleteFaq(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }
}
