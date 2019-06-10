import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { UserModel } from '../models';
import { UserEntity } from '../entities';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JwtService,
    ) { }

    async findById(email: string): Promise<UserModel> {
        const user = await this.userRepository.findById(email); 
        if (!user) {
            throw Error(`Can't find this user!`);
        }
        const userModel: UserModel = {
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
        };
        return userModel;
    }
    async create(userItem: UserEntity): Promise<UserEntity> {
        const user = await this.userRepository.create(userItem);
        if (!user) {
            throw Error(`Can't find this book!`);
        }

        const userModel: UserEntity = {
           name: user.name,
           password: user.password,
           email: user.email,
           role: user.role,
        };
        return userModel;
    }
    async delete(id: string): Promise<UserModel> {
        const deleteBook = await this.userRepository.delete(id);
        if (!deleteBook) {
            throw Error(`Can't find this author!`);
        }
        return deleteBook;
    }

}
