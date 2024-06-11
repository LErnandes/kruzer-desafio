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

export interface CreateNewCart {
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
  updatedProduct: ICartProduct;
}

export interface IdCartRequestPath {
  id: string;
}
