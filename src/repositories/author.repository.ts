import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { AuthorEntity, AuthorSchema } from '../entities';

@Injectable()
export class AuthorRepository {
    private authorModel: Model<AuthorEntity>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.authorModel = databaseContext.model('Author', AuthorSchema);
    }

    async GetListByBookId(id: string): Promise<AuthorEntity[]> {
        const book: any = await this.authorModel.aggregate([
            {
                $lookup:
                {
                    from: 'authorInBooks',
                    localField: 'bookId',
                    foreignField: 'id',
                    as: 'authors',
                },
            },
        ]);
        return book;
    }
}
