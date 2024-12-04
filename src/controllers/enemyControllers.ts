import { Request, Response } from 'express';
import { EnemyService } from '../services/enemyService';

export class enemyController {
  static async createEnemy(req: Request, res: Response): Promise<void> {
    try {
      const enemy = await EnemyService.createEnemy(req.body);
      res.status(200).json({ message: 'Enemy has been successfully created.', enemy });
    } catch (error: unknown) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  static async getEnemies(req: Request, res: Response): Promise<void> {
    try {
      const enemies = await EnemyService.getEnemies();
      res.status(200).json(enemies);
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to fetch enemies. Please try again.' });
    }
  }

  static async getEnemyById(req: Request, res: Response): Promise<void> {
    try {
      const enemy = await EnemyService.getEnemyById(req.params.id);
      if (!enemy) {
        res.status(404).json({ error: 'Enemy not found.' });
        return;
      }
      res.status(200).json(enemy);
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to fetch the enemy. Please try again.' });
    }
  }

  static async updateEnemy(req: Request, res: Response): Promise<void> {
    try {
      const enemy = await EnemyService.updateEnemy(req.params.id, req.body);
      if (!enemy) {
        res.status(404).json({ error: 'Enemy not found for update.' });
        return;
      }
      res.status(200).json({ message: 'Enemy has been successfully updated.', enemy });
    } catch (error: unknown) {
      res.status(400).json({ error: 'Failed to update the enemy. Please check the provided data and try again.' });
    }
  }

  static async deleteEnemy(req: Request, res: Response): Promise<void> {
    try {
      const enemy = await EnemyService.deleteEnemy(req.params.id);
      if (!enemy) {
        res.status(404).json({ error: 'Enemy not found for deletion.' });
        return;
      }
      res.status(200).json({ message: `Enemy has been successfully deleted: ${req.params.id}` });
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to delete the enemy. Please try again.' });
    }
  }

  static async takeDamage(req: Request, res: Response): Promise<void> {
    try {
      const { amount } = req.body;
      const enemy = await EnemyService.takeDamage(req.params.id, amount);
      if (!enemy) {
        res.status(404).json({ error: 'Enemy not found.' });
        return;
      }
      res.status(200).json({ message: `Enemy took ${amount} damage.`, enemy });
    } catch (error: unknown) {
      res.status(500).json({ error: 'Failed to apply damage. Please try again.' });
    }
  }
}
