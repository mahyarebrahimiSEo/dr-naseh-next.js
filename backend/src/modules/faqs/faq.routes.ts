import { Router } from 'express';
import { FaqController } from './faq.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { createFaqSchema, updateFaqSchema } from './faq.schemas';

const router = Router();

// Public
router.get('/', FaqController.getAll);

// Protected (Admin)
router.post(
  '/',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: createFaqSchema }),
  FaqController.create
);

router.put(
  '/:id',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: updateFaqSchema }),
  FaqController.update
);

router.delete('/:id', authenticate, requireRoles('ADMIN'), FaqController.delete);

export const faqRoutes = router;
