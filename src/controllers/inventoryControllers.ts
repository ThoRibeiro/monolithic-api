import { Request, Response } from 'express';
import { Inventory } from '../models/inventoryModels';
import mongoose from 'mongoose';

export class InventoryController {
  static async createInventory(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.body;

      const existingInventory = await Inventory.findOne({ user: userId });
      if (existingInventory) {
        res.status(400).json({ message: 'User already has an inventory.' });
        return;
      }

      const inventory = new Inventory({ user: userId, items: [] });
      await inventory.save();

      res.status(201).json({ message: 'Inventory created successfully.', inventory });
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async getInventory(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const inventory = await Inventory.findOne({ user: userId }).populate('items');

      if (!inventory) {
        res.status(404).json({ message: 'Inventory not found.' });
        return;
      }

      res.status(200).json(inventory);
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async addItem(req: Request, res: Response): Promise<void> {
    try {
      const { userId, itemId } = req.body;
      const inventory = await Inventory.findOne({ user: userId });

      if (!inventory) {
        res.status(404).json({ message: 'Inventory not found.' });
        return;
      }

      inventory.items.push(itemId);
      await inventory.save();

      res.status(200).json({ message: 'Item added successfully.', inventory });
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async removeItem(req: Request, res: Response): Promise<void> {
    try {
      const { userId, itemId } = req.body;

      const inventory = await Inventory.findOne({ user: userId });
      if (!inventory) {
        res.status(404).json({ message: 'Inventory not found.' });
        return;
      }

      inventory.items = inventory.items.filter((item) => item.toString() !== itemId);

      await inventory.save();
      res.status(200).json({ message: 'Item removed successfully.', inventory });
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  static async deleteInventory(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const inventory = await Inventory.findOneAndDelete({ user: userId });

      if (!inventory) {
        res.status(404).json({ message: 'Inventory not found.' });
        return;
      }

      res.status(200).json({ message: 'Inventory deleted successfully.' });
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
