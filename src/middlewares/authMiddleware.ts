import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface AuthenticatedRequest extends Request {
  token?: { id: string; username: string; role?: string };
}

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      console.error('Authorization header missing');
      return res.status(401).json({ message: 'Authentication failed. Please try again.' });
    }

    const token = authorizationHeader.split(' ')[1];
    if (!token) {
      console.error('Token missing');
      return res.status(401).json({ message: 'Authentication failed. Please try again.' });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({ message: 'Server configuration error.' });
    }

    const decodedToken = jwt.verify(token, secret) as {
      id: string;
      username: string;
      role?: string;
    };

    req.token = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Authentication failed. Please try again.' });
  }
};

export default authMiddleware;
