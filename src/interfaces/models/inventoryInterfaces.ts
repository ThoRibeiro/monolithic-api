import { IItem } from './itemInterfaces';
import { IUser } from './userInterfaces';

export interface IInventory extends Document {
  items: IItem[];
  user: IUser;
}
