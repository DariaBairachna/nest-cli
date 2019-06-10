import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../repositories';
import { AuthorModel } from '../models';
import { AuthorEntity } from '../entities';

@Injectable()
export class AuthorService {
    constructor(private readonly authorRepository: AuthorRepository,
        ) {}
    async findById(id: string): Promise<AuthorModel> {
        const author = await this.authorRepository.findById(id);
        if (!author) {
            throw Error(`Can't find this author!`);
        }
        const authorModel: AuthorModel = {
            name: author.name,
        };
        return authorModel;
    }
    async create(author: AuthorEntity): Promise<AuthorEntity> {
        const authorItem = await this.authorRepository.create(author);
        if (!authorItem) {
            throw Error(`Can't find this book!`);
        }
        const authorModel: AuthorModel = {
          name: author.name,
        };
        return authorModel;
    }
    async delete(id: string): Promise<AuthorModel>{
        const deleteAuthor = await this.authorRepository.delete(id);
        if (!deleteAuthor) {
            throw Error(`Can't find this author!`);
        }
        return deleteAuthor;
    }

}
