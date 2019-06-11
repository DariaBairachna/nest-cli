
import { Controller, Get, Query, Post, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
import { BookService } from '../services';
import { BookEntity } from '../entities';
import { BookModel } from '../models';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get('getBook')
  async find(@Query() queryParams  ) {
    return await this.bookService.findById(queryParams.id);
  }

  @Post('createBook')
   async create(@Body() bookItem: BookEntity) {
    return await this.bookService.create(bookItem);
  }

  @Post('deleteBook')
  async delete(@Body() id: string) {
   return await this.bookService.delete(id);
 }
}