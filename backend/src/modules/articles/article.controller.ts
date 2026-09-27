import { Request, Response, NextFunction } from 'express';
import { ArticleService } from './article.service';
import { ApiResponse } from '../../core/responses/ApiResponse';

export class ArticleController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { articles, meta } = await ArticleService.getArticles(req.query as any);
      return ApiResponse.success(res, articles, 'لیست مقالات دریافت شد', 200, meta);
    } catch (error) {
      next(error);
    }
  }

  static async getCategories(_req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await ArticleService.getCategories();
      return ApiResponse.success(res, categories);
    } catch (error) {
      next(error);
    }
  }

  static async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await ArticleService.getArticleBySlug(req.params.slug);
      return ApiResponse.success(res, article);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await ArticleService.createArticle(req.body);
      return ApiResponse.created(res, article, 'مقاله جدید با موفقیت ایجاد گردید');
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await ArticleService.updateArticle(req.params.id, req.body);
      return ApiResponse.success(res, article, 'مقاله با موفقیت بروزرسانی گردید');
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await ArticleService.deleteArticle(req.params.id);
      return ApiResponse.success(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }
}
