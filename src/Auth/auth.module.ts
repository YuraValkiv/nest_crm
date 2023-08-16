import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {AuthController} from "./auth.controller";
import {UsersModule} from "../Users/users.module";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: "SECRET",
            signOptions: {
                expiresIn: "24h"
            }
        })],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {
}
