import { Items } from "./itemInterfaces";
import { User } from "./userInterfaces";

export interface IInventory extends Document {
    items: Items[];
    user: User;
}