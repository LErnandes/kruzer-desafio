import { CreateNewCart, ICart, ICartProduct } from "../interfaces/ICart";
import Cart from "../models/cart";

class CartRepository {
  async getCartById(cartId: string): Promise<ICart | null> {
    return await Cart.findById(cartId);
  }

  async addItemToCart(
    cartId: string,
    product: ICartProduct
  ): Promise<ICart | null> {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return null;
    }

    cart.products.push(product);
    return await cart.save();
  }

  async updateCart(cart: ICart): Promise<ICart | null> {
    return await cart.save();
  }

  async createCart(cart: CreateNewCart): Promise<ICart> {
    return await Cart.create(cart);
  }

  async deleteCart(cartId: string): Promise<ICart | null> {
    return await Cart.findByIdAndDelete(cartId);
  }
}

export default new CartRepository();
