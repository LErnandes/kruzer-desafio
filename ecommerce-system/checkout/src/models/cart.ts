import { model, Schema } from "mongoose";
import { ICart } from "../interfaces/ICart";

const CartSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  deleted: { type: Boolean, default: false },
});

const Cart = model<ICart>("Cart", CartSchema);
export default Cart;
