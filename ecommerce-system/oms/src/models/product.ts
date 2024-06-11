import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/IProduct";

const ProductSchema: Schema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Product = model<IProduct>("Product", ProductSchema);
export default Product;
