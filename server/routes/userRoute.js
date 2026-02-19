import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/me', authenticate, UserController.getCurrentUser);
router.get('/:id', authenticate, UserController.getUserById);
router.put('/:id', authenticate, UserController.updateUser);
router.delete('/:id', authenticate, UserController.deleteUser);

export default router;