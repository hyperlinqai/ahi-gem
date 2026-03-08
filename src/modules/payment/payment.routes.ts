import { Router } from 'express';
// import { paymentController } from './payment.controller';
// import { validate, authenticate } from '../../middlewares';

const router = Router();

/**
 * Payment Routes
 *
 * Routes to be implemented:
 * POST   /create-order     - Create Razorpay order (auth)
 * POST   /verify           - Verify payment signature (webhook)
 * GET    /history          - User's payment history (auth)
 * POST   /refund/:orderId  - Initiate refund (admin)
 */

export { router as paymentRoutes };
