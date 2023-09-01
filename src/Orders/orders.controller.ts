import {Body, Controller, Get, Param} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get("/all")
    allOrders(@Param("id") id: string) {
        return null;
    }
}
