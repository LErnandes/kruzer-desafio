import { IProduct } from "../interfaces/IProduct";
import Product from "../models/product";

class ProductRepository {
  async getProductById(productId: string): Promise<IProduct | null>{
    return await Product.findById(productId);
  }
}

export default new ProductRepository();
