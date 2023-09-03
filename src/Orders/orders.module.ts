import { Module } from '@nestjs/common';
import {OrdersController} from "./orders.controller";
import {OrdersService} from "./orders.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Order, OrderSchema} from "./orders.schema";

@Module({
    controllers: [OrdersController],
    providers: [OrdersService],
    imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}])],
})
export class OrdersModule {
}
