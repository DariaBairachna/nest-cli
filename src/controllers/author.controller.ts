import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AuthorService } from '../services';
import { AuthorModel, AuthorInBookModel } from '../models';
import { AuthorInBookRepository } from '../repositories';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService, private readonly authorInBookRepository: AuthorInBookRepository) { }
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
  @Post('createAgrigate')
  async createAgrigate(@Body() authorInBook: AuthorInBookModel) {
    console.log(authorInBook)
    return await this.authorInBookRepository.createAgrigate(authorInBook);
  }
  @Post('deleteAuthor')
  async delete(@Body() id: string) {
    return await this.authorService.delete(id);
  }
}
