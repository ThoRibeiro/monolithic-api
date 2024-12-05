import { EnemyModel } from '../models/enemyModels';

export class EnemyService {
  static async createEnemy(enemyData: object) {
    const enemy = new EnemyModel(enemyData);
    await enemy.save();
    return enemy;
  }

  static async getEnemies() {
    return await EnemyModel.find();
  }

  static async getEnemyById(id: string) {
    return await EnemyModel.findById(id);
  }

  static async updateEnemy(id: string, updateData: object) {
    return await EnemyModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
  }

  static async deleteEnemy(id: string) {
    return await EnemyModel.findByIdAndDelete(id);
  }

  static async takeDamage(id: string, amount: number) {
    const enemy = await EnemyModel.findById(id);
    if (!enemy) {
      return null;
    }
    enemy.healthPoints -= amount;
    await enemy.save();
  }

  static async dealDamage(id: string): Promise<number | null> {
    const enemy = await EnemyModel.findById(id);
    if (!enemy) {
      return null;
    }
    return enemy.attackPower;
  }
}
