import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { strictRateLimiter } from '../../middlewares/rateLimiter.middleware';
import { loginSchema, registerSchema, changePasswordSchema } from './auth.schemas';

const router = Router();

router.post('/login', strictRateLimiter, validate({ body: loginSchema }), AuthController.login);
router.post('/logout', AuthController.logout);

// Protected routes
router.get('/me', authenticate, AuthController.getMe);
router.post('/change-password', authenticate, validate({ body: changePasswordSchema }), AuthController.changePassword);

// Only ADMIN can register new staff/secretaries
router.post('/register', authenticate, requireRoles('ADMIN'), validate({ body: registerSchema }), AuthController.register);

export const authRoutes = router;
