import { Injectable, Inject } from '@nestjs/common';
import { BookEntity, BookSchema, BookDocument } from '../entities';
import { Model, Mongoose } from 'mongoose';

@Injectable()
export class BookRepository {
    private bookModel: Model<BookDocument>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.bookModel = this.databaseContext.model('book', BookSchema);
    }

    async findById(id: string) {
        const bookEntity: BookEntity = {
            price: '40',
            author: [],
            title: '321dagsd',
            publishing: 'alesha production',
            year: '2000',
        };
        await this.bookModel.create(bookEntity);
        const books = await this.bookModel.find();
        const book = await this.bookModel.findById(id);
        return book;
    }
}
