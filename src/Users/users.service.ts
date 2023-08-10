import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../prisma/prisma.service";
import {User} from "@prisma/client";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async onModuleInit() {    await this.create('example@example.mail', 'pass')
    }
    async create(email: string, password: string): Promise<User> {
        console.log(email)
        console.log(password)
        const user = await this.prisma.user.create({
           data: {
               email,
               password
           }
        });
        return user;
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();

    }

   /* async findOne(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
    }

    async update(id: string, dto: CreateUserDto): Promise<User> {
        return this.prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                email: dto.email,
                password: dto.password,
            },
        });
    }

    async remove(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id: parseInt(id) },
        });
    }*/

}
