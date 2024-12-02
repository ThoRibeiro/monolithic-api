import { model, Schema } from 'mongoose';

const itemSchema = new Schema({
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

export const Item = model('Item', itemSchema);
