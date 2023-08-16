import {Model} from 'mongoose';
import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User} from "./users.schema";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userRepository: Model<User>) {
    }

    async createUser(dto: CreateUserDto) {
        const user = new this.userRepository(dto).save();
        return user;
    }

    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.find().exec();
    }

    async findByIdUser(id: string): Promise<User> {
        return this.userRepository.findById(id);
    }

    async deleteUserById(id: string) {
        const result = await this.userRepository.deleteOne({_id: id});

    }

    async updateUser(id: string, dto: CreateUserDto): Promise<User> {
        const updatedUser = await this.userRepository.findByIdAndUpdate(id, dto, {new: true});
        return updatedUser;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({email: email});
        return user;
    }
}

