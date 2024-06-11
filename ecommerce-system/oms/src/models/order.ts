import { model, Schema } from "mongoose";
import { IOrder } from "../interfaces/IOrder";

const OrderSchema: Schema = new Schema({
  status: { type: String, enum: ["PENDING", "DELIVERED", "CANCELED"], required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  cartId: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ]
});

const Order = model<IOrder>("Order", OrderSchema);
export default Order;
