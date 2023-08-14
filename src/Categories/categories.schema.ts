import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from "../Users/users.schema";

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
    @Prop()
    name: string;

    @Prop()
    imageSrc: string;

    @Prop()
    user: User;

}

export const CategorySchema = SchemaFactory.createForClass(Category);