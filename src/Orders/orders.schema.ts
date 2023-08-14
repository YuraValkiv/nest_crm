import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from "../Users/users.schema";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop({default: Date.now})
    date: Date;

    @Prop({})
    order: number;

    @Prop({ type: [{ name: String, quantity: Number, cost: Number }]})
    list: {
        name: string,
        quantity: number,
        cost: number }[];

    @Prop()
    user: User;

}

export const OrderSchema = SchemaFactory.createForClass(Order);