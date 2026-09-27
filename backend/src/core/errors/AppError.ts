export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: unknown;

  constructor(message: string, statusCode = 500, details?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string, details?: unknown): AppError {
    return new AppError(message, 400, details);
  }

  static unauthorized(message = 'احراز هویت انجام نشده است یا توکن نامعتبر است'): AppError {
    return new AppError(message, 401);
  }

  static forbidden(message = 'شما دسترسی لازم برای انجام این عملیات را ندارید'): AppError {
    return new AppError(message, 403);
  }

  static notFound(message = 'منبع مورد نظر یافت نشد'): AppError {
    return new AppError(message, 404);
  }

  static conflict(message: string): AppError {
    return new AppError(message, 409);
  }

  static internal(message = 'خطای غیرمنتظره سرور رخ داده است'): AppError {
    return new AppError(message, 500);
  }
}
