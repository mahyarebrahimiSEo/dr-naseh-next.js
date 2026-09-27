import { Router } from 'express';
import { GalleryController } from './gallery.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import { createGalleryItemSchema, updateGalleryItemSchema } from './gallery.schemas';

const router = Router();

// Public
router.get('/', GalleryController.getAll);

// Protected (Admin)
router.post(
  '/',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: createGalleryItemSchema }),
  GalleryController.create
);

router.put(
  '/:id',
  authenticate,
  requireRoles('ADMIN'),
  validate({ body: updateGalleryItemSchema }),
  GalleryController.update
);

router.delete('/:id', authenticate, requireRoles('ADMIN'), GalleryController.delete);

export const galleryRoutes = router;
