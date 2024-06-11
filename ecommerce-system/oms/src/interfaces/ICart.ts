import { Document } from "mongoose";
import { IProduct } from "./IProduct";

export interface ICart extends Document {
  id?: string;
  userId: string;
  products: ICartProduct[];
  deleted?: boolean;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
