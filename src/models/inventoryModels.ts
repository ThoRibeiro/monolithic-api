import { model, Schema } from 'mongoose';
import { IInventory } from '../interfaces/models/inventoryInterfaces';

const InventorySchema = new Schema<IInventory>({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true,
  },
});

export const Inventory = model<IInventory>('Inventory', InventorySchema);
