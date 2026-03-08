import { Router } from 'express';
// import { userController } from './user.controller';
// import { validate, authenticate, authorize } from '../../middlewares';

const router = Router();

/**
 * User Routes
 *
 * Routes to be implemented:
 * GET    /profile      - Get current user profile
 * PUT    /profile      - Update current user profile
 * PATCH  /change-password - Logged-in user changes their password
 * GET    /             - List all users (admin)
 * GET    /:id          - Get user by ID (admin)
 * PUT    /:id          - Update user (admin)
 * DELETE /:id          - Delete user (admin)
 * PATCH  /:id/block    - Admin blocks a user
 * PATCH  /:id/unblock  - Admin unblocks a user
 */

export { router as userRoutes };
