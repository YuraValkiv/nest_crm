import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from "../Users/users.schema";
import {Category} from "../Categories/categories.schema";

export type PositionDocument = HydratedDocument<Position>;

@Schema()
export class Position {
    @Prop()
    name: string;

    @Prop()
    cost: number;

    @Prop()
    category: Category;

    @Prop()
    user: User;

}

export const PositionSchema = SchemaFactory.createForClass(Position);