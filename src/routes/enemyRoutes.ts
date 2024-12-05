import express from 'express';
import { enemyController } from '../controllers/enemyControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const enemyRoutes = express.Router();

enemyRoutes.post('/create', authMiddleware, enemyController.createEnemy);
enemyRoutes.get('/', authMiddleware, enemyController.getEnemies);
enemyRoutes.get('/:id', authMiddleware, enemyController.getEnemyById);
enemyRoutes.put('/:id', authMiddleware, enemyController.updateEnemy);
enemyRoutes.delete('/:id', authMiddleware, enemyController.deleteEnemy);
enemyRoutes.post('/:id/takeDamage', authMiddleware, enemyController.takeDamage);

export default enemyRoutes;
