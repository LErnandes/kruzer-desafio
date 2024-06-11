import { Context } from "koa";
import { UpdateProductRequestBody, UpdateProductRequestParams } from "../interfaces/IProduct";
import productService from "../services/productService";

export const updateProduct = async (ctx: Context) => {
  const { id }: UpdateProductRequestParams = ctx.params as UpdateProductRequestParams;
  const { code, name, description, price, stock }: UpdateProductRequestBody = ctx.request.body as UpdateProductRequestBody;
  const product = await productService.updateProduct(id, { code, name, description, price, stock });

  if (!product) {
    ctx.status = 404;
    ctx.body = "Product not found";
    return;
  }

  ctx.body = product;
};
