import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { AuthorInBookSchema, AuthorInBookEntityDocument, AuthorInBookEntity } from '../entities';

@Injectable()
export class AuthorInBookRepository {
    private authorInBookModel: Model<AuthorInBookEntityDocument>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.authorInBookModel = this.databaseContext.model('authorinbooks', AuthorInBookSchema);
    }

    async create(authorInBookEntity: AuthorInBookEntity): Promise<AuthorInBookEntity> {
        const book = await this.authorInBookModel.create(authorInBookEntity);
        return book;
    }

}
