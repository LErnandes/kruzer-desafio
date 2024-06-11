import { Document } from "mongoose";

export interface IProduct extends Document {
    code: string;
    name: string;
    description: string;
}

export interface UpdateProductRequestBody {
    code?: string;
    name?: string;
    description?: string;
}

export interface UpdateProductRequestParams {
    id: string;
}
