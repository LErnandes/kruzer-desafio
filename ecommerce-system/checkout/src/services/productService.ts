import productRepository from "../repositories/productRepository";
import { GetProductRequestParams, IProduct } from "../interfaces/IProduct";

class ProductService {
  async getProductById({ id }: GetProductRequestParams): Promise<IProduct | null>{
    return await productRepository.getProductById(id);
  }
}

export default new ProductService();
