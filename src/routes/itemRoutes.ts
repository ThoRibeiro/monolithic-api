import express from 'express';
import { ItemController } from '../controllers/itemControllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const itemRoutes = express.Router();

// Define routes with controller methods
itemRoutes.post('/create', authMiddleware, ItemController.createItem);
itemRoutes.get('/getAll', authMiddleware, ItemController.getItems);
itemRoutes.get('/:id', authMiddleware, ItemController.getItemById);
itemRoutes.put('/:id', authMiddleware, ItemController.updateItem);
itemRoutes.delete('/:id', authMiddleware, ItemController.deleteItem);

export default itemRoutes;
