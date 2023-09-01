import {Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtAuthGuard} from "../Auth/jwt-auth.guard";

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @HttpCode(200)
    @Get()
    userGetAll() {
        return this.userService.findAllUsers();
    }

    @HttpCode(200)
    @Get(":id")
    userGetById(@Param("id") id: string) {
        return this.userService.findByIdUser(id);
    }

    @HttpCode(200)
    @Post()
    userCreate(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto);
    }

    @HttpCode(200)
    @Put(":id")
    userUpdate(@Param("id") id: string,
               @Body() dto: CreateUserDto) {
        return this.userService.updateUser(id, dto);
    }

    @HttpCode(200)
    @Delete(":id")
    userDelete(@Param("id") id: string) {
        return this.userService.deleteUserById(id);
    }

}
