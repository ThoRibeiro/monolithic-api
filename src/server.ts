import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import itemRoutes from './routes/itemRoutes';
import enemyRoutes from './routes/enemyRoutes';

const PORT = 3000;

/**
 * Initialise the Express server with the necessary routes.
 */
async function main() {
  const server = express();

  server.use(bodyParser.json());

  server.use('/auth', authRoutes);
  server.use('/items', itemRoutes);
  server.use('/enemy', enemyRoutes);

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  try {
    await mongoose.connect('mongodb://localhost:27017/monolithic-api', {});
    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

main();
