import { Injectable, Inject } from '@nestjs/common';
import { BookEntity, BookSchema, BookDocument } from '../entities';
import { Model, Mongoose } from 'mongoose';
import { BookModel } from '../models';

@Injectable()
export class BookRepository {
    private bookModel: Model<BookDocument>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.bookModel = this.databaseContext.model('books', BookSchema);
    }
    async findById(id: string): Promise<BookEntity> {
        const book = await this.bookModel.findById(id);
        return book;
    }

    async create(bookItem: BookEntity): Promise<BookEntity> {
        const book = await this.bookModel.create(bookItem);
        return book;
    }

    async delete(id: string): Promise<BookEntity> {
        const book = await this.bookModel.findByIdAndRemove(id);
        return book;
    }
}
