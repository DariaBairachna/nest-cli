import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { UserDocument, UserSchema, UserEntity } from '../entities';
import { UserModel } from '../models';


@Injectable()
export class UserRepository {
    private bookModel: Model<UserDocument>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.bookModel = this.databaseContext.model('users', UserSchema);
    }
    async findById(id: string): Promise<UserModel> {
        const book = await this.bookModel.findById(id);
        return book;
    }

    async create(bookItem: UserEntity): Promise<UserEntity> {
        const book = await this.bookModel.create(bookItem);
        return book;
    }

    async delete(id: string): Promise<UserModel>{
        const book = await this.bookModel.findByIdAndRemove(id);
        return book;
    }
}
