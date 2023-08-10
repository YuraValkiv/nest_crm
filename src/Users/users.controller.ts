import {Body, Controller, Get, Header, HttpCode, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {

  }
  @HttpCode(200)
  @Get()
  userGetAll() {
    return this.userService.findAll();

  }

  @HttpCode(200)
  @Post()
  userCreate(@Body() {email, password}) {
      return this.userService.create(email, password);

  }


}
