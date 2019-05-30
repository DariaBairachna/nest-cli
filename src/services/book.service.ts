import { Injectable } from '@nestjs/common';
import { BookRepository, AuthorRepository } from '../repositories';
import { BookModel, AuthorModel } from 'src/models';
@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository, private readonly authorRepository: AuthorRepository,
    ) { }

    async findById(id: string) {
        const book = await this.bookRepository.findById(id);
        if (!book) {
            throw Error(`Can't find this book!`);
        }
        const authors = await this.authorRepository.GetListByBookId(id);
        const authorModels = authors.map(item => {
            const authorModel: AuthorModel = {
                id: item.id,
                name: item.name,
            };
            return authorModel;
        });
        const bookModel: BookModel = {
            authors: authorModels,
            title: book.title,
        };
        return bookModel;
    }
}
