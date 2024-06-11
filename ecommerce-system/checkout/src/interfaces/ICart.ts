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

export interface CreateNewCart {
  status: CartStatus;
  products: ICartProduct[];
  userId: string;
}

export interface AddToCartRequestParams {
  product: ICartProduct;
  userId: string;
  cartId?: string;
}

export interface UpdateItemCartRequestParams {
  cartId: string;
  updatedProduct?: ICartProduct;
  status?: CartStatus;
}

export interface IdCartRequestPath {
  id: string;
}
