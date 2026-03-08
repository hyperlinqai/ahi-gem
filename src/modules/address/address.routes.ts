import { Router } from 'express';
// import { addressController } from './address.controller';
// import { validate, authenticate } from '../../middlewares';

const router = Router();

/**
 * Address Routes
 *
 * Routes to be implemented:
 * GET    /             - List user's saved addresses (auth)
 * POST   /             - Add new address (auth)
 * PUT    /:id          - Update address (auth)
 * DELETE /:id          - Delete address (auth)
 * PATCH  /:id/default  - Set as default address (auth)
 */

export { router as addressRoutes };
