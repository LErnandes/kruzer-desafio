export interface AddProductRequestBody {
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
