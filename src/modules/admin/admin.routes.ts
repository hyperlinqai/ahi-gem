import { Router } from 'express';
// import { adminController } from './admin.controller';
// import { validate, authenticate, authorize } from '../../middlewares';

const router = Router();

/**
 * Admin Dashboard Routes
 *
 * Routes to be implemented:
 * GET    /dashboard/stats      - Revenue, orders, users summary (admin)
 * GET    /reports/sales        - Sales report with date range filter (admin)
 * GET    /reports/inventory    - Low stock / out of stock report (admin)
 * GET    /inventory            - Full inventory list (admin)
 * PATCH  /inventory/:id        - Manual stock adjustment (admin)
 */

export { router as adminRoutes };
