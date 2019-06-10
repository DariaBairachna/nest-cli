import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { AuthorEntity, AuthorSchema, AuthorDocument } from '../entities';
import { AuthorModel } from '../models';

@Injectable()
export class AuthorRepository {
    private authorModel: Model<AuthorDocument>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.authorModel = this.databaseContext.model('authors', AuthorSchema);
    }

    async findById(id: string) {
        const author = await this.authorModel.findById(id);
        return author;
    }

    async create(autor: AuthorEntity): Promise<AuthorEntity>{
        const createAutor = await this.authorModel.create(autor);
        return createAutor;
    }

    async delete(id: string): Promise<AuthorModel>{
        const deleteAutor = await this.authorModel.findByIdAndRemove(id);
        return deleteAutor;
    }

    async GetListByBookId(id: string): Promise<AuthorEntity[]> {
        const book: any = await this.authorModel.aggregate([
            {
                $lookup:
                {
                    from: 'books',
                    localField: 'authorId',
                    foreignField: id,
                    as: 'authorInBook',
                },
            },
        ]);
        console.log(book)
        return book;
    }
}