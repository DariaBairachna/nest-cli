import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthorEntity } from '../entities';

@Injectable()
export class AuthorRepository {
    constructor(@Inject('AUTHOR_MODEL') private readonly bookModel: Model<AuthorEntity>) { }

    async GetListByBookId(id: string): Promise<AuthorEntity[]> {
        const book: any = await this.bookModel.aggregate([
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
