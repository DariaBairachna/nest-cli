import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AuthorEntity } from '../entities';
import { AuthorService } from '../services';
import { AuthorModel } from '../models';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) { }
    @Get('getAuthor')
    async find(@Query() queryParams) {
      return await this.authorService.findById(queryParams.id);
    }
    // @Get('getBook')
    // find(@Query() queryParams) {
    //   return this.bookService.findOne(queryParams.id);
    // } 
    @Post('createAuthor')
     async create(@Body() author: AuthorModel) {
      return await this.authorService.create(author);
    }

    @Post('deleteAuthor')
     async delete(@Body() id: string) {
      return await this.authorService.delete(id);
    }
}
