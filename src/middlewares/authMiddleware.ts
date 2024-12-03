import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
  token?: { id: string; username: string; role?: string };
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) : void => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      console.error('Authorization header missing');
       res.status(401).json({ message: 'Authentication failed. Please try again.' });
       return;
    }

    const token = authorizationHeader.split(' ')[1];
    if (!token) {
      console.error('Token missing');
      res.status(401).json({ message: 'Authentication failed. Please try again.' });
      return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not defined');
      res.status(500).json({ message: 'Server configuration error.' });
      return;
    }

    const decodedToken = jwt.verify(token, secret) as {
      id: string;
      username: string;
    };

    req.token = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Authentication failed. Please try again.' });
  }
};