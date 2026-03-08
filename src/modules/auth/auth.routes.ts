import { Router } from 'express';
import { authController } from './auth.controller';
import { validate, authenticate } from '../../middlewares';
import { loginSchema, registerSchema, refreshTokenSchema, forgotPasswordSchema, resetPasswordSchema, verifyEmailSchema } from './auth.validator';
import { authLimiter } from '../../middlewares';

const router = Router();

/**
 * Auth Routes
 *
 * Routes:
 * POST /register  - Register a new user
 * POST /login     - Login user
 * POST /logout          - Logout user
 * POST /refresh         - Refresh access token
 * POST /forgot-password - Send OTP/reset link to email
 * POST /reset-password  - Reset with token + new password
 * POST /verify-email    - Email verification after register
 */

router.post('/register', authLimiter, validate(registerSchema), authController.register);
router.post('/login', authLimiter, validate(loginSchema), authController.login);
router.post('/logout', authenticate, authController.logout);
router.post('/refresh', validate(refreshTokenSchema), authController.refreshToken);
router.post('/forgot-password', authLimiter, validate(forgotPasswordSchema), authController.forgotPassword);
router.post('/reset-password', authLimiter, validate(resetPasswordSchema), authController.resetPassword);
router.post('/verify-email', authLimiter, validate(verifyEmailSchema), authController.verifyEmail);

export { router as authRoutes };
