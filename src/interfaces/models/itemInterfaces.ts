import { Document } from 'mongoose';

export interface IItem extends Document {
  name: String;
  value: Number;
  weight: Number;
}
