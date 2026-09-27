import { Request, Response, NextFunction } from 'express';
import { NewsletterService } from './newsletter.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class NewsletterController {
  static async subscribe(req: Request, res: Response, next: NextFunction) {
    try {
      const subscriber = await NewsletterService.subscribe(req.body);
      return ApiResponse.created(
        res,
        subscriber,
        'عضویت شما در خبرنامه تخصصی سلامت کلینیک با موفقیت ثبت شد'
      );
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;

      const { subscribers, meta } = await NewsletterService.getSubscribers(page, limit);
      return ApiResponse.success(res, subscribers, 'لیست اعضای خبرنامه دریافت شد', 200, meta);
    } catch (error) {
      next(error);
    }
  }

  static async unsubscribe(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await NewsletterService.unsubscribe(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }
}
