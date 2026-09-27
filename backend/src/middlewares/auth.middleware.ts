import { Request, Response, NextFunction } from 'express';
import { AppError } from '../core/errors/AppError';
import { jwtUtil, TokenPayload } from '../utils/jwt';
import { prisma } from '../database/prisma';

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload & { fullName: string };
    }
  }
}

export const authenticate = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    let token: string | undefined;

    // Check Authorization Header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return next(AppError.unauthorized('لطفاً جهت دسترسی به این بخش وارد سیستم شوید'));
    }

    // Verify token
    let payload: TokenPayload;
    try {
      payload = jwtUtil.verify(token);
    } catch {
      return next(AppError.unauthorized('توکن منقضی شده یا نامعتبر است'));
    }

    // Check user exists and active
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, email: true, fullName: true, role: true, isActive: true },
    });

    if (!user || !user.isActive) {
      return next(AppError.unauthorized('حساب کاربری یافت نشد یا غیرفعال شده است'));
    }

    req.user = {
      userId: user.id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
    };

    next();
  } catch (error) {
    next(error);
  }
};

export const requireRoles = (...allowedRoles: string[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) {
      return next(AppError.unauthorized());
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(AppError.forbidden(`این عملیات فقط برای نقش‌های مجاز [${allowedRoles.join(', ')}] امکان‌پذیر است`));
    }

    next();
  };
};
