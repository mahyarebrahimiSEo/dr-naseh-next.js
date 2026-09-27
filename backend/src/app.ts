import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { env, isDevelopment } from './config';
import { apiRateLimiter } from './middlewares/rateLimiter.middleware';
import { errorHandler } from './middlewares/error.middleware';
import { AppError } from './core/errors/AppError';
import { ApiResponse } from './core/responses/ApiResponse';

// Import Routes
import { authRoutes } from './modules/auth/auth.routes';
import { appointmentRoutes } from './modules/appointments/appointment.routes';
import { articleRoutes } from './modules/articles/article.routes';
import { serviceRoutes } from './modules/services/service.routes';
import { newsletterRoutes } from './modules/newsletter/newsletter.routes';
import { galleryRoutes } from './modules/gallery/gallery.routes';
import { testimonialRoutes } from './modules/testimonials/testimonial.routes';
import { faqRoutes } from './modules/faqs/faq.routes';
import { clinicRoutes } from './modules/clinic/clinic.routes';
import { dashboardRoutes } from './modules/dashboard/dashboard.routes';

export function createApp(): Application {
  const app = express();

  // Trust proxy if behind Nginx / Cloudflare
  app.set('trust proxy', 1);

  // 1. Security Headers (Helmet)
  app.use(
    helmet({
      contentSecurityPolicy: false, // Allow cross-origin image loads in dev
      crossOriginEmbedderPolicy: false,
    })
  );

  // 2. CORS Setup
  const allowedOrigins = env.CORS_ORIGIN.split(',').map((o) => o.trim());
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
          callback(null, true);
        } else {
          callback(new AppError(`دسترسی از مبدا ${origin} توسط CORS مسدود گردید`, 403));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    })
  );

  // 3. Body Parsing & Cookies
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));
  app.use(cookieParser());

  // 4. Request Logging
  app.use(morgan(isDevelopment ? 'dev' : 'combined'));

  // 5. Global Rate Limiting
  app.use('/api', apiRateLimiter);

  // 6. Health Check
  app.get('/health', (_req: Request, res: Response) => {
    return ApiResponse.success(res, {
      status: 'UP',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: 'Dr. Naseh Yousefi Clinic Backend API',
    });
  });

  // 7. Base API Route Index
  app.get('/api/v1', (_req: Request, res: Response) => {
    return ApiResponse.success(res, {
      name: 'Dr. Naseh Yousefi Physical Medicine & Rehabilitation Clinic API',
      version: '1.0.0',
      docs: '/api/v1/docs',
      endpoints: {
        auth: '/api/v1/auth',
        appointments: '/api/v1/appointments',
        articles: '/api/v1/articles',
        services: '/api/v1/services',
        newsletter: '/api/v1/newsletter',
        gallery: '/api/v1/gallery',
        testimonials: '/api/v1/testimonials',
        faqs: '/api/v1/faqs',
        clinic: '/api/v1/clinic',
        dashboard: '/api/v1/dashboard',
      },
    });
  });

  // 8. Register API Feature Routers
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/appointments', appointmentRoutes);
  app.use('/api/v1/articles', articleRoutes);
  app.use('/api/v1/services', serviceRoutes);
  app.use('/api/v1/newsletter', newsletterRoutes);
  app.use('/api/v1/gallery', galleryRoutes);
  app.use('/api/v1/testimonials', testimonialRoutes);
  app.use('/api/v1/faqs', faqRoutes);
  app.use('/api/v1/clinic', clinicRoutes);
  app.use('/api/v1/dashboard', dashboardRoutes);

  // 9. 404 Route Not Found
  app.use((req: Request, _res: Response, next: NextFunction) => {
    next(AppError.notFound(`مسیر درخواستی [${req.method} ${req.originalUrl}] در سامانه تعریف نشده است`));
  });

  // 10. Global Error Handler
  app.use(errorHandler);

  return app;
}
