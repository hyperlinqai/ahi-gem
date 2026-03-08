import { Router } from 'express';
// import { categoryController } from './category.controller';
// import { validate, authenticate, authorize } from '../../middlewares';

const router = Router();

/**
 * Category Routes
 *
 * Routes to be implemented:
 * GET    /             - List all categories (public)
 * GET    /:id          - Get single category (public)
 * GET    /:id/products - Products under a category (public)
 * POST   /             - Create category (admin)
 * PUT    /:id          - Update category (admin)
 * DELETE /:id          - Delete category (admin)
 */

export { router as categoryRoutes };
