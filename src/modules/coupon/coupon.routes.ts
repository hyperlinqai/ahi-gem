import { Router } from 'express';
// import { couponController } from './coupon.controller';
// import { validate, authenticate, authorize } from '../../middlewares';

const router = Router();

/**
 * Coupon Routes
 *
 * Routes to be implemented:
 * POST   /apply        - Apply coupon to cart (user)
 * DELETE /remove       - Remove coupon from cart (user)
 * GET    /             - List all coupons (admin)
 * POST   /             - Create coupon (admin)
 * PUT    /:id          - Update coupon (admin)
 * DELETE /:id          - Delete coupon (admin)
 */

export { router as couponRoutes };
