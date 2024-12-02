import express from 'express';
import { ItemController } from '../controllers/itemControllers';

const itemRoutes = express.Router();

// Define routes with controller methods
itemRoutes.post('/create', ItemController.createItem);
itemRoutes.get('/getAll', ItemController.getItems);
itemRoutes.get('/:id', ItemController.getItemById);
itemRoutes.put('/:id', ItemController.updateItem);
itemRoutes.delete('/:id', ItemController.deleteItem);

export default itemRoutes;
