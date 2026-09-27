import { Router } from 'express';
import { ClinicServicesController } from './service.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import {
  createServiceSchema,
  updateServiceSchema,
  serviceQuerySchema,
} from './service.schemas';

const router = Router();

// Public routes
router.get('/', validate({ query: serviceQuerySchema }), ClinicServicesController.getAll);
router.get('/:slug', ClinicServicesController.getBySlug);

// Protected routes (Admin / Secretary)
router.post(
  '/',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: createServiceSchema }),
  ClinicServicesController.create
);

router.put(
  '/:id',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: updateServiceSchema }),
  ClinicServicesController.update
);

router.delete('/:id', authenticate, requireRoles('ADMIN'), ClinicServicesController.delete);

export const serviceRoutes = router;
