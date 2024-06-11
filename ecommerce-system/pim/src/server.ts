import app from './app';
import { connectToDatabase } from './utils/database';
import { kafkaConsumer } from './utils/kafka';

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  await connectToDatabase();
  await kafkaConsumer();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
