import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Order} from "./orders.schema";
import {CreateOrderDto} from "./dto/create-order.dto";

@Injectable()
export class OrdersService {
    constructor(@InjectModel(Order.name) private orderRepository: Model<Order>) {
    }

    async getAllOrders(userId: string) {
        const orders = await this.orderRepository.find({user: userId}).sort({date: -1});
        return orders;
    }

    async createOrder(dto: CreateOrderDto) {
        const lastorder = await this.orderRepository.findOne({user: dto.user}).sort({date: -1});
        const maxOrder = lastorder ? lastorder.order + 1 : 0;
        const newOrder = new this.orderRepository({...dto, order: maxOrder});
        //TODO order field will autoincrement (seq)
        return await newOrder.save();
    }
}
