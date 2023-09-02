import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateOrderDto} from "./dto/create-order.dto";
import {OrdersService} from "./orders.service";

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {
    }
    @Get("/get/:id")
    getAllOrdersById(@Param("id") id: string) {
        return this.orderService.getAllOrders(id);
    }
    @Post("/add")
    addOrderByUserId(@Body() dto: CreateOrderDto) {
        return this.orderService.createOrder(dto);
    }
}
