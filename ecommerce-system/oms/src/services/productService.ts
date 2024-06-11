import productRepository from "../repositories/productRepository";
import { UpdateProductRequestBody } from "../interfaces/IProduct";

class ProductService {
  async updateProduct(id: string, data: UpdateProductRequestBody) {
    return await productRepository.updateProduct(id, data);
  }
}

export default new ProductService();
