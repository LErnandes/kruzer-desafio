import productRepository from "../repositories/productRepository";
import { GetProductRequestParams, IProduct } from "../interfaces/IProduct";

class ProductService {
  async getProductById({ id }: GetProductRequestParams): Promise<IProduct | null>{
    return await productRepository.getProductById(id);
  }
  async updateProduct(id: string, data: IProduct) {
    return await productRepository.updateProduct(id, data);
  }
}

export default new ProductService();
