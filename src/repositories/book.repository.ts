import { Injectable, Inject } from '@nestjs/common';
import { BookEntity } from '../entities';
import { Model } from 'mongoose';

@Injectable()
export class BookRepository {
    constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<BookEntity>) { }

    async findById(id: string) {
        const book = await this.bookModel.findById(id);
        return book;
    }
}
