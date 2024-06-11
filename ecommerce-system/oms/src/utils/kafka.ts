import { OrderStatus } from "../interfaces/IOrder";
import orderService from "../services/orderService";
import { CartStatus } from "../interfaces/ICart";
import { Kafka } from "kafkajs";
import productService from "../services/productService";

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
        if (topic === "cart-changes") {
          const cart = JSON.parse(message.value!.toString());
          if (cart.status === CartStatus.FINISHED) {
            await orderService.addOrder({
              status: OrderStatus.PENDING,
              userId: cart.userId,
              cartId: cart._id,
              products: cart.products,
            });
          }
        }

        if (topic === "product-changes") {
          const product = JSON.parse(message.value!.toString());
          await productService.updateProduct(product.id, product.data);
        }
      },
    });
  },
  disconnect: async () => {
    await consumer.disconnect();
  },
};

export const startKafka = async () => {
  kafkaProducer.connect().catch((error) => console.error("Error connecting Kafka producer:", error));
  kafkaConsumer.connect().catch((error) => console.error("Error connecting Kafka consumer:", error));
}

export default kafka;
