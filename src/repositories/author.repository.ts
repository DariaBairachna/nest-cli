import { Injectable, Inject } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { AuthorEntity, AuthorSchema } from '../entities';

@Injectable()
export class AuthorRepository {
    private authorModel: Model<AuthorEntity>;
    constructor(@Inject('DATABASE_CONNECTION') private readonly databaseContext: Mongoose) {
        this.authorModel = this.databaseContext.model('Author', AuthorSchema);
    }

    async GetListByBookId(id: string): Promise<AuthorEntity[]> {
        console.log('testtttttttttttttttttttttttttttttttt');
        const book: any = await this.authorModel.aggregate([
            {
                $lookup:
                {
                    from: 'authorInBooks',
                    localField: 'bookId',
                    foreignField: 'id',
                    as: 'author',
                },
            },
        ]);
        return book;
    }
}
