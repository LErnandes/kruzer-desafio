import app from './app';
import { connectToDatabase } from './services/database';
import { kafkaConsumer } from './services/kafka';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  await connectToDatabase();
  await kafkaConsumer();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
