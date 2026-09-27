import { Router } from 'express';
import { ArticleController } from './article.controller';
import { validate } from '../../middlewares/validate.middleware';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';
import {
  createArticleSchema,
  updateArticleSchema,
  articleQuerySchema,
} from './article.schemas';

const router = Router();

// Public routes
router.get('/categories', ArticleController.getCategories);
router.get('/', validate({ query: articleQuerySchema }), ArticleController.getAll);
router.get('/:slug', ArticleController.getBySlug);

// Protected routes (Admin / Secretary)
router.post(
  '/',
  authenticate,
  requireRoles('ADMIN', 'SECRETARY'),
  validate({ body: createArticleSchema }),
  ArticleController.create
);

router.put(
  '/:id',
  authenticate,
  requireRoles('ADMIN', 'SECRETARY'),
  validate({ body: updateArticleSchema }),
  ArticleController.update
);

router.delete('/:id', authenticate, requireRoles('ADMIN'), ArticleController.delete);

export const articleRoutes = router;
