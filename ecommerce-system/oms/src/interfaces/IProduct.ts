import { Document } from "mongoose";

export interface IProduct extends Document {
    code: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface UpdateProductRequestBody {
    code: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface UpdateProductRequestParams {
    id: string;
}
