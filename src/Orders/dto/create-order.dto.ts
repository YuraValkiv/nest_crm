import {Types} from "mongoose";

export class CreateOrderDto {
    readonly list: {
        name: string;
        quantity: number;
        cost: number
    }
    readonly user: Types.ObjectId;

}