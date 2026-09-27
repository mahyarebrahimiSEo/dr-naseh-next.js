import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { ApiResponse } from '../../core/responses/ApiResponse';
import { isProduction } from '../../config';

export class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.login(req.body);

      // Optionally set HttpOnly cookie for security
      res.cookie('token', result.token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? 'strict' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return ApiResponse.success(res, result, 'ورود با موفقیت انجام شد');
    } catch (error) {
      next(error);
    }
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.register(req.body);
      return ApiResponse.created(res, result, 'کاربر با موفقیت ثبت شد');
    } catch (error) {
      next(error);
    }
  }

  static async getMe(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.getMe(req.user!.userId);
      return ApiResponse.success(res, result);
    } catch (error) {
      next(error);
    }
  }

  static async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.changePassword(req.user!.userId, req.body);
      return ApiResponse.success(res, result, result.message);
    } catch (error) {
      next(error);
    }
  }

  static async logout(_req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie('token');
      return ApiResponse.success(res, null, 'خروج از حساب با موفقیت انجام شد');
    } catch (error) {
      next(error);
    }
  }
}
