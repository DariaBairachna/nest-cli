import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { AuthorEntity, AuthorInBookSchema, AuthorInBookEntityDocument, BookDocument, BookSchema } from '../entities';
import {  AuthorInBookModel } from '../models';
import { BookEntity } from 'dist/entities';

@Injectable()
export class AuthorInBookRepository {
    private bookModel: Model<BookDocument>;
    private authorInBookModel: Model<AuthorInBookEntityDocument>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.authorInBookModel = this.databaseContext.model('authorInBook', AuthorInBookSchema);
        this.bookModel = this.databaseContext.model('books', BookSchema);
    }

    async createAgrigate(authorInBook: AuthorInBookModel): Promise<AuthorInBookModel>{
        const createAgrigate = await this.authorInBookModel.create(authorInBook);
        return createAgrigate;
    }
    async GetListByBookId(id: string): Promise<BookEntity> {
        const book: any = await this.bookModel.aggregate([
            {
                $lookup:
                {
                    from: 'authors',
                    localField:  'authorId',
                    foreignField: '_id',
                    as: 'authorInBook',
                },
            },
        ]);
        var json = JSON.stringify(book);
        console.log(json);
        return book;
    }

}