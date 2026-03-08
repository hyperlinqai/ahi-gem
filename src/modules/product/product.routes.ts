import { Router } from 'express';
// import { productController } from './product.controller';
// import { validate, authenticate, authorize } from '../../middlewares';

const router = Router();

/**
 * Product Routes
 *
 * Routes to be implemented:
 * GET    /             - List all products (public)
 * GET    /search       - Search by query, filters, sort (public)
 * GET    /category/:id - Get products by category (public)
 * GET    /slug/:slug   - Get product by slug (public)
 * GET    /:id          - Get product by ID (public)
 * GET    /:id/reviews  - Get reviews for a product (public)
 * POST   /:id/reviews  - Submit a review (auth)
 * DELETE /:id/reviews/:rid - Delete a review (admin)
 * POST   /:id/images   - Upload product images (admin)
 * DELETE /:id/images/:imgId - Remove a product image (admin)
 * POST   /             - Create product (admin)
 * PUT    /:id          - Update product (admin)
 * DELETE /:id          - Delete product (admin)
 */

export { router as productRoutes };
