import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "pim-service",
  brokers: ["kafka:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "pim-group" });

export const kafkaProducer = {
  connect: async () => {
    await producer.connect();
  },
  send: async (payload: { topic: string; messages: Array<{ key: string; value: string }> }) => {
    await producer.send(payload);
  },
  disconnect: async () => {
    await producer.disconnect();
  },
};

export const kafkaConsumer = {
  connect: async () => {
    await consumer.connect();
  },
  subscribe: async (topic: string | RegExp) => {
    await consumer.subscribe({ topic });
  },
  run: async () => {
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message on topic ${topic}, partition ${partition}: ${message.value}`);
        // Process the received message here
      },
    });
  },
  disconnect: async () => {
    await consumer.disconnect();
  },
};

kafkaProducer.connect().catch((error) => console.error("Error connecting Kafka producer:", error));
kafkaConsumer.connect().catch((error) => console.error("Error connecting Kafka consumer:", error));

export default kafka;
