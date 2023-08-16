import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {CreateUserDto} from "../Users/dto/create-user.dto";
import {UsersService} from "../Users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcypt from "bcryptjs";
import {User} from "../Users/users.schema";
@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user);
    }


    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException("User with this email is exicting", HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword});
        return this.generateToken(user);
    }

    async generateToken(user) {
        const payload = {id: user.id, email: user.email}
        return {
            token: this.jwtService.sign(payload)
        }
    }

     private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcypt.compare(userDto.password, user.password)
         if (user && passwordEquals) {
             return user
         }
         throw new UnauthorizedException({message: "invalid password or email"})
    }
}
