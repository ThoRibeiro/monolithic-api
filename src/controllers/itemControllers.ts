import { Request, Response } from 'express';
import { Item } from '../models/itemModels';

export class ItemController {
  static async createItem(req: Request, res: Response): Promise<void> {
    try {
      const item = new Item(req.body);
      await item.save();
      res.status(200).json({ message: 'Item has been successfully created.' });
    } catch (error: unknown) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async getAllItems(req: Request, res: Response): Promise<void> {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to fetch items. Please try again.' });
    }
  }

  static async getItemById(req: Request, res: Response): Promise<void> {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        res.status(404).json({ error: 'Item not found.' });
      }
      res.status(200).json(item);
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to fetch the item. Please try again.' });
    }
  }

  static async updateItem(req: Request, res: Response): Promise<void> {
    try {
      const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!item) {
        res.status(404).json({ error: 'Item not found for update.' });
      }
      res.status(200).json({ message: 'Item has been successfully updated.', item });
    } catch (error: unknown) {
      res.status(400).json({ error: 'Failed to update the item. Please check the provided data and try again.' });
    }
  }

  static async deleteItem(req: Request, res: Response): Promise<void> {
    try {
      const item = await Item.findByIdAndDelete(req.params.id);
      if (!item) {
        res.status(404).json({ error: 'Item not found for deletion.' });
      }
      res.status(200).json({ message: `Item has been successfully deleted: ${req.params.id}` });
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to delete the item. Please try again.' });
    }
  }
}
