import { Request, Response, NextFunction } from 'express';
import { TestimonialService } from './testimonial.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class TestimonialController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const onlyApproved = req.query.all !== 'true';
      const testimonials = await TestimonialService.getTestimonials(onlyApproved);
      return ApiResponse.success(res, testimonials, 'لیست نظرات دریافت شد');
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await TestimonialService.createTestimonial(req.body);
      return ApiResponse.created(res, item, 'نظر بیمار با موفقیت ثبت شد');
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const item = await TestimonialService.updateTestimonial(req.params.id, req.body);
      return ApiResponse.success(res, item, 'نظر با موفقیت بروزرسانی شد');
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await TestimonialService.deleteTestimonial(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }
}
