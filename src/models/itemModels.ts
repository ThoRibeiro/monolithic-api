import { model, Schema } from 'mongoose';
import { IItem } from '../interfaces/models/itemInterfaces';

const itemSchema = new Schema<IItem>({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

export const Item = model<IItem>('Item', itemSchema);
