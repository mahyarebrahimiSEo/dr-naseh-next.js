import { Router } from 'express';
import { AppointmentController } from './appointment.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { strictRateLimiter } from '../../middlewares/rateLimiter.middleware';
import {
  createAppointmentSchema,
  updateAppointmentStatusSchema,
  appointmentQuerySchema,
} from './appointment.schemas';

const router = Router();

// Public: Book consultation or appointment (strict rate limited)
router.post(
  '/',
  strictRateLimiter,
  validate({ body: createAppointmentSchema }),
  AppointmentController.create
);

// Protected: Admin & Secretary access
router.use(authenticate);

router.get('/stats', requireRoles('ADMIN', 'SECRETARY'), AppointmentController.getStats);

router.get(
  '/',
  requireRoles('ADMIN', 'SECRETARY'),
  validate({ query: appointmentQuerySchema }),
  AppointmentController.getAll
);

router.get('/:id', requireRoles('ADMIN', 'SECRETARY'), AppointmentController.getById);

router.patch(
  '/:id',
  requireRoles('ADMIN', 'SECRETARY'),
  validate({ body: updateAppointmentStatusSchema }),
  AppointmentController.updateStatus
);

router.delete('/:id', requireRoles('ADMIN'), AppointmentController.delete);

export const appointmentRoutes = router;
