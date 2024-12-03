import express from 'express';
import { InventoryController } from '../controllers/inventoryControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const inventoryRoutes = express.Router();

inventoryRoutes.post('/', authMiddleware, InventoryController.createInventory);
inventoryRoutes.get('/:userId', authMiddleware, InventoryController.getInventory);
inventoryRoutes.post('/addItem', authMiddleware, InventoryController.addItem);
inventoryRoutes.post('/removeItem', authMiddleware, InventoryController.removeItem);
inventoryRoutes.delete('/:userId', authMiddleware, InventoryController.deleteInventory);

export default inventoryRoutes;
