import express from 'express';
import { AuthController } from '../controllers/authControllers';

const authRoutes = express.Router();

// Define routes with controller methods
authRoutes.post('/login', AuthController.login);
authRoutes.post('/register', AuthController.register);

export default authRoutes;
