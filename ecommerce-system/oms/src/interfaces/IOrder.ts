import { Document } from "mongoose";
import { IProduct } from "./IProduct";

export interface AddOrderRequestBody {
    status: OrderStatus;
    userId: string;
    cartId: string;
    products: IProduct[];
}

export interface IOrder extends Document, AddOrderRequestBody {}

export enum OrderStatus {
    PENDING = "PENDING",
    DELIVERED = "DELIVERED",
    CANCELED = "CANCELED",
}
