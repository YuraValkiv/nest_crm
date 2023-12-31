import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from "./users.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./users.schema";
import {AuthModule} from "../Auth/auth.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
        forwardRef(()=> AuthModule)],
    exports: [UsersService]

})
export class UsersModule {
}
