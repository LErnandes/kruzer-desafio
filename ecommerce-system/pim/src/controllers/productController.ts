import { Context } from "koa";
import Product from "../models/product";

export const addProduct = async (ctx: Context) => {
  const { code, name, description } = ctx.request.body;
  const product = new Product({ code, name, description });
  await product.save();
  ctx.body = product;
};

export const updateProduct = async (ctx: Context) => {
  const { id } = ctx.params;
  const { code, name, description } = ctx.request.body;
  const product = await Product.findByIdAndUpdate(
    id,
    { code, name, description },
    { new: true }
  );
  ctx.body = product;
};
