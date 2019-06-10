import { Injectable } from '@nestjs/common';
import { BookRepository, AuthorRepository } from '../repositories';
import { BookModel, AuthorModel } from 'src/models';
import { BookEntity } from 'src/entities';
@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository, private readonly authorRepository: AuthorRepository,
    ) {}

    async findById(id: string): Promise<BookModel> {
        const book = await this.bookRepository.findById(id);
        if (!book) {
            throw Error(`Can't find this book!`);
        }
        const authors = await this.authorRepository.GetListByBookId(id);
        const authorModels = authors.map(item => {
            const authorModel: AuthorModel = {
                name: item.name,
            };
            return authorModel;
        });
        const bookModel: BookModel = {
            title: book.title,
            publishing: book.publishing,
            year: book.year,
            price: book.price,
        };
        return bookModel;
    }
    async create(bookItem: BookEntity): Promise<BookEntity> {
        const book = await this.bookRepository.create(bookItem);
        if (!book) {
            throw Error(`Can't find this book!`);
        }

        const bookModel: BookModel = {
            title: book.title,
            publishing: book.publishing,
            year: book.year,
            price: book.price,
        };
        return bookModel;
    }
    async delete(id: string): Promise<BookModel>{
        const deleteBook = await this.bookRepository.delete(id);
        if (!deleteBook) {
            throw Error(`Can't find this author!`);
        }
        return deleteBook;
    }

}
