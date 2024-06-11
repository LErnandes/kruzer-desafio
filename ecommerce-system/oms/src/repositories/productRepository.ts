import Product from "../models/product";
import { UpdateProductRequestBody } from "../interfaces/IProduct";

class ProductRepository {
  async updateProduct(id: string, data: UpdateProductRequestBody) {
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    return product;
  }
}

export default new ProductRepository();
