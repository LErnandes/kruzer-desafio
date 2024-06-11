import app from './app';
import { connectToDatabase } from './utils/database';
import { startKafka } from './utils/kafka';

const PORT = process.env.PORT || 3002;

const startServer = async () => {
  await connectToDatabase();
  await startKafka();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
