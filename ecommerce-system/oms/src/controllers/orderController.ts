import { Context } from "koa";
import { AddOrderRequestBody } from "../interfaces/IOrder";
import orderService from "../services/orderService";

export const addOrder = async (ctx: Context) => {
  const { status, cartId, products, userId }: AddOrderRequestBody = ctx.request.body as AddOrderRequestBody;
  const order = await orderService.addOrder({ status, cartId, products, userId });

  ctx.status = 201;
  ctx.body = order;
};
