import Order from "../models/order";
import { AddOrderRequestBody } from "../interfaces/IOrder";

class OrderRepository {
  async addOrder(data: AddOrderRequestBody) {
    const order = new Order(data);
    await order.save();
    return order;
  }
}

export default new OrderRepository();
