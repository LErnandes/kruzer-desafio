import orderRepository from "../repositories/orderRepository";
import { AddOrderRequestBody } from "../interfaces/IOrder";

class OrderService {
    async addOrder(data: AddOrderRequestBody): Promise<AddOrderRequestBody> {
        return await orderRepository.addOrder(data);
    }
}

export default new OrderService();
