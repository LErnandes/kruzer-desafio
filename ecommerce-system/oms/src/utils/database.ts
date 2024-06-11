import Product from "../models/product";
import { kafkaProducer } from "./kafka";
import mongoose from "mongoose";


export const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://mongodb:27017/pim", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

const startChangeStreamListener = async () => {
  const changeStream = Product.watch();

  changeStream.on("change", async (change) => {
    if (change.operationType === "insert" || change.operationType === "update") {
      if (change.ns.coll === "Order") {
        const product = change.fullDocument;
        await kafkaProducer.send({
          topic: "product-changes",
          messages: [
            {
              key: product._id.toString(),
              value: JSON.stringify(product),
            },
          ],
        });
      }
    }
  });

  changeStream.on("error", (error) => {
    console.error("Error in change stream:", error);
  });

  console.log("Change stream listener started");
};

startChangeStreamListener().catch((error) => console.error("Error in starting change stream listener:", error));
