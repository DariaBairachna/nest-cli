import { Injectable } from '@nestjs/common';
import { BookRepository, AuthorRepository, AuthorInBookRepository } from '../repositories';
import { BookModel, AuthorModel } from 'src/models';
import { BookEntity } from 'src/entities';
import { ObjectID } from 'mongodb';
@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository,
        private readonly authorInBookRepository: AuthorInBookRepository,
        private readonly authorRepository: AuthorRepository,
    ) { }

    async findById(id: string): Promise<BookModel> {
        // const book = await this.bookRepository.findById(id);
        // if (!book) {
        //     throw Error(`Can't find this book!`);
        // }
        const author = await this.authorRepository.create({
            name: 'Author321',
        });
        const book = await this.bookRepository.create({
            price: '15',
            publishing: new Date().toISOString(),
            title: 'Book321',
            year: '2019',
        });
        const authorInBook = await this.authorInBookRepository.create({
            authorId: new ObjectID(author.id),
            bookId: new ObjectID(book.id),
        });
        const authors = await this.authorRepository.getListByBookId(id);
        return null;
        // const authorModels = authors.map(item => {
        //     const authorModel: AuthorModel = {
        //         name: item.name,
        //     };
        //     return authorModel;
        // });
        // const bookModel: BookModel = {
        //     title: book.title,
        //     publishing: book.publishing,
        //     year: book.year,
        //     price: book.price,
        //     authorId: authorModels,
        // };
        // return bookModel;
    }
    async create(bookItem: BookEntity): Promise<BookModel> {
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
    async delete(id: string): Promise<BookModel> {
        const deleteBook = await this.bookRepository.delete(id);
        if (!deleteBook) {
            throw Error(`Can't find this author!`);
        }
        return deleteBook;
    }

}
