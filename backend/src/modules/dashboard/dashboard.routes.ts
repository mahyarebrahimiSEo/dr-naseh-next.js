import { Router } from 'express';
import { DashboardController } from './dashboard.controller';
import { authenticate, requireRoles } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/overview', authenticate, requireRoles('ADMIN', 'SECRETARY'), DashboardController.getOverview);

export const dashboardRoutes = router;
