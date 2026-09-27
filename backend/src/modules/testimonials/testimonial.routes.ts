import { Router } from 'express';
import { TestimonialController } from './testimonial.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { createTestimonialSchema, updateTestimonialSchema } from './testimonial.schemas';

const router = Router();

// Public: View testimonials
router.get('/', TestimonialController.getAll);

// Protected: Admin
router.post(
  '/',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: createTestimonialSchema }),
  TestimonialController.create
);

router.put(
  '/:id',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: updateTestimonialSchema }),
  TestimonialController.update
);

router.delete('/:id', authenticate, requireRoles('ADMIN'), TestimonialController.delete);

export const testimonialRoutes = router;
