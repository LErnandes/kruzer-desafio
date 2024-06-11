import Product from "../models/product";
import { AddProductRequestBody, UpdateProductRequestBody } from "../interfaces/IProduct";

class ProductRepository {
  async addProduct(data: AddProductRequestBody) {
    const product = new Product(data);
    await product.save();
    return product;
  }

  async updateProduct(id: string, data: UpdateProductRequestBody) {
    const product = await Product.findByIdAndUpdate(id, data, { new: true });
    return product;
  }
}

export default new ProductRepository();
