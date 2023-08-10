import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {PrismaService} from "../prisma/prisma.service";
import {PrismaModule} from "../prisma/prisma.module";
import {UsersController} from "./users.controller";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PrismaModule]
})
export class UsersModule {}
