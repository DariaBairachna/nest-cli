import { Injectable, Inject } from '@nestjs/common';
import { BookEntity, BookSchema } from '../entities';
import { Model, Mongoose } from 'mongoose';

@Injectable()
export class BookRepository {
    private bookModel: Model<BookEntity>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.bookModel = databaseContext.model('Book', BookSchema);
    }

    async findById(id: string) {
        const book = await this.bookModel.findById(id);
        return book;
    }
}
