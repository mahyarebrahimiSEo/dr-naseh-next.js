import { Response } from 'express';

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export class ApiResponse {
  static success<T>(
    res: Response,
    data: T,
    message = 'عملیات با موفقیت انجام شد',
    statusCode = 200,
    meta?: PaginationMeta
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      meta,
      timestamp: new Date().toISOString(),
    });
  }

  static created<T>(res: Response, data: T, message = 'رکورد با موفقیت ایجاد شد') {
    return this.success(res, data, message, 201);
  }

  static noContent(res: Response) {
    return res.status(204).send();
  }

  static error(
    res: Response,
    message = 'خطایی رخ داد',
    statusCode = 500,
    details?: unknown
  ) {
    return res.status(statusCode).json({
      success: false,
      error: {
        message,
        statusCode,
        details,
      },
      timestamp: new Date().toISOString(),
    });
  }
}
