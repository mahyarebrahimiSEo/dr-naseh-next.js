import { Router } from 'express';
import { ClinicController } from './clinic.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { updateClinicSettingSchema } from './clinic.schemas';

const router = Router();

// Public
router.get('/', ClinicController.getInfo);

// Protected (Admin)
router.post(
  '/settings',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: updateClinicSettingSchema }),
  ClinicController.updateSetting
);

export const clinicRoutes = router;
