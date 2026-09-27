import { Router } from 'express';
import { NewsletterController } from './newsletter.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { strictRateLimiter } from '../../middlewares/rateLimiter.middleware';
import { subscribeSchema } from './newsletter.schemas';

const router = Router();

// Public: Subscribe
router.post('/', strictRateLimiter, validate({ body: subscribeSchema }), NewsletterController.subscribe);

// Protected: View subscribers
router.get('/', authenticate, requireRoles('ADMIN', 'SECRETARY'), NewsletterController.getAll);
router.patch('/:id/unsubscribe', authenticate, requireRoles('ADMIN'), NewsletterController.unsubscribe);

export const newsletterRoutes = router;
