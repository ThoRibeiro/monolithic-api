import { Document } from 'mongoose';

export interface Enemy extends Document {
  name: string;
  level: number;
  healthPoints: number;
  attackPower: number;
  defensePower: number;
  takeDamage(amount: number): void;
  dealDamage(): number;
}
