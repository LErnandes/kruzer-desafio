import { AddProductRequestBody, UpdateProductRequestBody, UpdateProductRequestParams } from "../interfaces/IProduct";
import Product from "../models/product";
import { Context } from "koa";


export const addProduct = async (ctx: Context) => {
  const { code, name, description }: AddProductRequestBody = ctx.request.body as AddProductRequestBody;
  const product = new Product({ code, name, description });
  await product.save();
  ctx.body = product;
};

export const updateProduct = async (ctx: Context) => {
  const { id }: UpdateProductRequestParams = ctx.params;
  const { code, name, description }: UpdateProductRequestBody = ctx.request.body as UpdateProductRequestBody;
  const product = await Product.findByIdAndUpdate(
    id,
    { code, name, description },
    { new: true }
  );
  ctx.body = product;
};
