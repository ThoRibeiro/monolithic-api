import { Document } from 'mongoose';

export interface Items extends Document {
  name: String;
  value: Number;
  weight: Number;
}
