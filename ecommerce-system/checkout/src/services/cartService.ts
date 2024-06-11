import cartRepository from "../repositories/cartRepository";
import { AddToCartRequestParams, CartStatus, CreateNewCart, ICart, UpdateItemCartRequestParams } from "../interfaces/ICart";

class ProductService {
  async addToCart({
    product,
    userId,
    cartId
  }: AddToCartRequestParams): Promise<ICart | null> {
    if (!cartId) {
      const newCart: CreateNewCart = {
        userId,
        products: [product],
        status: CartStatus.ACTIVE
      };
      return await cartRepository.createCart(newCart);
    } else {
      return await cartRepository.addItemToCart(
        cartId,
        product
      );
    }
  }

  async updateCartItem({
    cartId,
    updatedProduct,
    status
  }: UpdateItemCartRequestParams): Promise<ICart | null> {
    const cart = await cartRepository.getCartById(cartId);
    if (!cart) {
      return null;
    }

    if (updatedProduct) {
      const productIndex = cart.products.findIndex(
        (product) => product.code === updatedProduct.code
      );
      if (productIndex === -1) {
        return null;
      }

      cart.products[productIndex] = updatedProduct;
    }

    if (status) {
      cart.status = status;
    }

    return await cartRepository.updateCart(cart);
  }

  async deleteCart(cartId: string): Promise<boolean> {
    const cart = await cartRepository.getCartById(cartId);
    if (!cart) {
      return false;
    }

    cart.deleted = true;
    await cartRepository.updateCart(cart);
    return true;
  }

  async getCartById(cartId: string): Promise<ICart | null> {
    return await cartRepository.getCartById(cartId);
  }
}

export default new ProductService();
