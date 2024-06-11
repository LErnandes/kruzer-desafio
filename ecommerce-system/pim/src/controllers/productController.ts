import { Context } from "koa";
import { AddProductRequestBody, UpdateProductRequestBody, UpdateProductRequestParams } from "../interfaces/IProduct";
import productService from "../services/productService";

export const addProduct = async (ctx: Context) => {
  const { code, name, description }: AddProductRequestBody = ctx.request.body as AddProductRequestBody;
  const product = await productService.addProduct({ code, name, description });
  ctx.body = product;
};

export const updateProduct = async (ctx: Context) => {
  const { id }: UpdateProductRequestParams = ctx.params as UpdateProductRequestParams;
  const { code, name, description }: UpdateProductRequestBody = ctx.request.body as UpdateProductRequestBody;
  const product = await productService.updateProduct(id, { code, name, description });
  ctx.body = product;
};
