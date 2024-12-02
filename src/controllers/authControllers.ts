import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/userModels';
import bcrypt from 'bcrypt';

dotenv.config();

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, username, password }: { email: string; username: string; password: string } = req.body;

      const usernameExist = await UserModel.findOne({ username });
      if (usernameExist) {
        res.status(484).json({
          message: 'The username is already taken. Please choose another one.',
        });
        return;
      }

      const emailExist = await UserModel.findOne({ email });
      if (emailExist) {
        res.status(484).json({
          message: 'An account with this email already exists. Please use another email or log in.',
        });
        return;
      }

      const hashedPassword: string = await bcrypt.hash(password, 10);

      await UserModel.create({
        email,
        username,
        password: hashedPassword,
      });

      res.status(201).json({ message: 'User successfully created!' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, password }: { username: string; password: string } = req.body;

      if (!username || !password) {
        res.status(400).json({ message: 'Username and password are required.' });
        return;
      }

      const user = await UserModel.findOne({ username });
      if (!user) {
        res.status(404).json({ message: 'User not found.' });
        return;
      }

      const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(401).json({ message: 'Incorrect password.' });
        return;
      }

      const secret = process.env.JWT_SECRET;
      if (!secret) {
        console.error('JWT_SECRET is not defined');
        res.status(500).json({ message: 'Server configuration error.' });
        return;
      }

      const token = jwt.sign({ username: user.username, id: user._id }, secret, { expiresIn: '1h' });

      res.status(200).json({ username: user.username, jwt: token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}
