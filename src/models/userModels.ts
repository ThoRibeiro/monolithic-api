import mongoose, { Schema } from 'mongoose';
import { User } from '../interfaces/models/userInterfaces';

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = mongoose.model<User>('User', UserSchema);
