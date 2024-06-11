import { Document } from "mongoose";
import { IProduct } from "./IProduct";

export interface ICart extends Document {
  id?: string;
  userId: string;
  status: CartStatus;
  products: ICartProduct[];
  deleted?: boolean;
}

export enum CartStatus {
  ACTIVE = "active",
  FINISHED = "finished",
  INACTIVE = "inactive",
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
