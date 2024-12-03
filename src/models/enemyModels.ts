import { model, Schema } from 'mongoose';
import { Enemy } from '../interfaces/models/enemyInterfaces';

const enemySchema = new Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  healthPoints: { type: Number, required: true },
  attackPower: { type: Number, required: true },
  defensePower: { type: Number, required: true },
});

export const EnemyModel = model<Enemy>('Enemy', enemySchema);
