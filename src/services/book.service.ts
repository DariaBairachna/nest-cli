import { Injectable } from '@nestjs/common';
import { BookRepository, AuthorRepository, AuthorInBookRepository } from '../repositories';
import { BookModel, AuthorModel } from 'src/models';
import { BookEntity } from 'src/entities';
@Injectable()
export class BookService {
    constructor(private readonly bookRepository: BookRepository, private readonly authorInBookRepository: AuthorInBookRepository,
    ) {}

    async findById(id: string): Promise<BookModel> {
        const book = await this.bookRepository.findById(id);
        if (!book) {
            throw Error(`Can't find this book!`);
        }
        const authors = await this.authorInBookRepository.GetListByBookId(id);
         
        const bookModel: BookModel = {
            title: book.title,
            publishing: book.publishing,
            year: book.year,
            price: book.price,
            authorId: authorModels,
        };
        return bookModel;
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
            authorId: book.authorId,
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
