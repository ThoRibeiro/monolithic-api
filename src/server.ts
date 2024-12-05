import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import itemRoutes from './routes/itemRoutes';
import inventoryRoutes from './routes/inventoryRoutes';

const PORT = process.env.PORT;
/**
 * Initialise the Express server with the necessary routes.
 */
async function main() {
  const server = express();

  server.use(bodyParser.json());

  server.use('/auth', authRoutes);
  server.use('/inventories', inventoryRoutes);
  server.use('/items', itemRoutes);

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
