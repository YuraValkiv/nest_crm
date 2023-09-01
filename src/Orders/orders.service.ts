import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order} from "./orders.schema";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderRepository: Model<Order>) {
    }
    async getAllOrders(userId: string) {
        const orders = await this.orderRepository.find({ user: userId}).sort({date: -1});
        return orders;
    }

    async createOrder(userId: string) {
        const lastOrder = await this.orderRepository.
    }
}
