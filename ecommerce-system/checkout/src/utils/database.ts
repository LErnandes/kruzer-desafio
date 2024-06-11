import { CartStatus } from "../interfaces/ICart";
import Product from "../models/product";
import { kafkaProducer } from "./kafka";
import mongoose from "mongoose";


export const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://mongodb:27017/checkout", {
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
      if (change.ns.coll === "Cart") {
        const cart = change.fullDocument;
        if (cart.status !== CartStatus.FINISHED) return;
        await kafkaProducer.send({
          topic: "cart-changes",
          messages: [
            {
              key: cart._id.toString(),
              value: JSON.stringify(cart),
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
