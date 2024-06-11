import { Context } from "koa";
import cartService from "../services/cartService";
import { AddToCartRequestParams, IdCartRequestPath, UpdateItemCartRequestParams } from "../interfaces/ICart";

export const addItemCart = async (ctx: Context) => {
  const { product, userId, cartId }: AddToCartRequestParams = ctx.request.body as AddToCartRequestParams;

  const cart = await cartService.addToCart({ product, userId, cartId });

  if (!cart) {
    ctx.status = 404;
    ctx.body = { message: "Cart not found" };
    return;
  }

  ctx.body = cart;
};

export const deleteCart = async (ctx: Context) => {
  const { id }: IdCartRequestPath = ctx.request.path as unknown as IdCartRequestPath;

  const deleted = await cartService.deleteCart(id);

  if (deleted) {
    ctx.status = 204;
  } else {
    ctx.status = 404;
    ctx.body = { message: "Cart not found" };
  }
};

export const updateCart = async (ctx: Context) => {
  const { id }: IdCartRequestPath = ctx.request.path as unknown as IdCartRequestPath;
  const { updatedProduct, status }: UpdateItemCartRequestParams = ctx.request.body as UpdateItemCartRequestParams;

  const cart = await cartService.updateCartItem({ cartId: id, updatedProduct, status });

  if (!cart) {
    ctx.status = 404;
    ctx.body = { message: "Cart not found" };
    return;
  }

  ctx.body = cart;
};

export const getCart = async (ctx: Context) => {
  const { id }: IdCartRequestPath = ctx.request.path as unknown as IdCartRequestPath;
  const cart = await cartService.getCartById(id);

  if (!cart) {
    ctx.status = 404;
    ctx.body = { message: "Cart not found" };
    return;
  }

  return cart;
};

