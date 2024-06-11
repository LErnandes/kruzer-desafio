import productService from "../services/productService";
import { GetProductRequestParams } from "../interfaces/IProduct";
import { Context } from "koa";

export const getProduct = async (ctx: Context) => {
  const { id }: GetProductRequestParams = ctx.request.path as unknown as GetProductRequestParams;
  const product = await productService.getProductById({ id });

  if (!product) {
    ctx.status = 404;
    ctx.body = "Product not found";
    return;
  }
  
  ctx.body = product;
};
