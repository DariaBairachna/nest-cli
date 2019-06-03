
import { Controller, Get, Query, Post, Body, Res, HttpStatus, HttpException } from '@nestjs/common';
import { BookService } from '../services';
import { BookModel } from '../models';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) { }

  @Get('getBook')
  find(@Query() queryParams) {
    return this.bookService.findById(queryParams.id);
  }

  @Post('create')
   async create(@Body() bookModel: BookModel) {
    console.log(JSON.stringify(bookModel));
    return bookModel;
  }
}