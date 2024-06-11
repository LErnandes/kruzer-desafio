export interface IProduct {
    id?: string;
    code: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface GetProductRequestParams {
    id: string;
}
