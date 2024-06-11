import { IProduct } from "../interfaces/IProduct";
import Product from "../models/product";

class ProductRepository {
  async getProductById(productId: string): Promise<IProduct | null>{
    return await Product.findById(productId);
  }
  
  async updateProduct(id: string, data: IProduct) {
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    return product;
  }
}

export default new ProductRepository();
