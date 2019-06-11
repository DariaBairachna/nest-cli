import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { AuthorEntity, AuthorSchema, AuthorDocument, AuthorInBookSchema, AuthorInBookEntityDocument } from '../entities';
import { AuthorModel, AuthorInBookModel } from '../models';
import { ObjectID } from 'mongodb';

@Injectable()
export class AuthorRepository {
    private authorModel: Model<AuthorDocument>;
    private authorInBookModel: Model<AuthorInBookEntityDocument>;

    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.authorModel = this.databaseContext.model('authors', AuthorSchema);
        this.authorInBookModel = this.databaseContext.model('authorinbooks', AuthorInBookSchema);
    }

    async findById(id: string) {
        const author = await this.authorModel.findById(id);
        return author;
    }

    async getListByBookId(id: string): Promise<AuthorEntity[]> {
        const authors: any = await this.authorInBookModel.aggregate([
            {
                $lookup:
                {
                    from: 'authors',
                    localField: 'authorId',
                    foreignField: '_id',
                    as: 'author',
                },

            },
            { $unwind: '$author' },
            {
                $lookup:
                {
                    from: 'books',
                    localField: 'bookId',
                    foreignField: '_id',
                    as: 'book',
                },

            },
            { $unwind: '$book' },
            {
                $match: {
                    $and: [{ bookId: new ObjectID(id) }],
                },
            },
        ]);
        return authors;
    }

    async create(autor: AuthorEntity): Promise<AuthorEntity> {
        const createAutor = await this.authorModel.create(autor);
        return createAutor;
    }

    async delete(id: string): Promise<AuthorModel> {
        const deleteAutor = await this.authorModel.findByIdAndRemove(id);
        return deleteAutor;
    }
}
