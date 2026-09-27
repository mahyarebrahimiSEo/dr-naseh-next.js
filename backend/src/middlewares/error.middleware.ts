import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { AppError } from '../core/errors/AppError';
import { ApiResponse } from '../core/responses/ApiResponse';
import { logger } from '../utils/logger';
import { isProduction } from '../config';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(`[Error] ${req.method} ${req.originalUrl} - ${err.message}`, {
    stack: !isProduction ? err.stack : undefined,
  });

  // AppError (Operational custom errors)
  if (err instanceof AppError) {
    return ApiResponse.error(res, err.message, err.statusCode, err.details);
  }

  // Prisma Unique Constraint (P2002)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      const target = Array.isArray(err.meta?.target) ? err.meta?.target.join(', ') : 'فیلد تکراری';
      return ApiResponse.error(res, `اطلاعات وارد شده (${target}) قبلاً ثبت شده و تکراری است`, 409);
    }
    if (err.code === 'P2025') {
      return ApiResponse.error(res, 'رکورد درخواستی در پایگاه داده یافت نشد', 404);
    }
  }

  // SyntaxError (Malformed JSON in request body)
  if (err instanceof SyntaxError && 'status' in err && (err as { status: number }).status === 400) {
    return ApiResponse.error(res, 'فرمت JSON ارسالی در بدنه درخواست اشتباه است', 400);
  }

  // Fallback for unhandled unexpected internal errors
  const message = isProduction
    ? 'خطای غیرمنتظره‌ای در سرور رخ داده است. لطفاً بعداً تلاش فرمایید.'
    : err.message || 'Internal Server Error';

  return ApiResponse.error(
    res,
    message,
    500,
    !isProduction ? { stack: err.stack } : undefined
  );
};
