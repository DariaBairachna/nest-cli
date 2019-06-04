
import { Controller, Get, Query, Post, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
import { BookService } from '../services';
import { BookModel } from '../models';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get('getBook')
  async find(@Query() queryParams) {
    return await this.bookService.findById(queryParams.id);
  }
  // @Get('getBook')
  // find(@Query() queryParams) {
  //   return this.bookService.findOne(queryParams.id);
  // }

  @Post('create')
   async create(@Body() bookModel: BookModel) {
    return bookModel;
  }
}