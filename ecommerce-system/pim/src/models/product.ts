import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  code: string;
  name: string;
  description: string;
}

const ProductSchema: Schema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model<IProduct>("Product", ProductSchema);
export default Product;
