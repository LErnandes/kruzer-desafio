import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "pim-service",
  brokers: ["kafka:9092"],
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "pim-group" });

export const kafkaProducer = async () => {
  await producer.connect();
  // Your producer code here
};

export const kafkaConsumer = async () => {
  await consumer.connect();
  // Your consumer code here
};

export default kafka;
