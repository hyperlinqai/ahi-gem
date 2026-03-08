import { Router } from 'express';
// import { wishlistController } from './wishlist.controller';
// import { validate, authenticate } from '../../middlewares';

const router = Router();

/**
 * Wishlist Routes
 *
 * Routes to be implemented:
 * GET    /             - Get user's wishlist (auth)
 * POST   /             - Add product to wishlist (auth)
 * DELETE /:productId   - Remove from wishlist (auth)
 */

export { router as wishlistRoutes };
