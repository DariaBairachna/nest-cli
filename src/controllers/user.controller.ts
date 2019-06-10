
import { Controller, Get, Query, Post, Body, } from '@nestjs/common';
import { UserService } from '../services';
import { UserModel } from '../models';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('getUser')
  async find(@Query() queryParams) {
    return await this.userService.findById(queryParams.id);
  }

//   @Post('login')
//     async login(@Body() user: UserModel): Promise<any> {
//       return this.userService.login(user);
//     } 

  @Post('register')
   async create(@Body() bookItem: UserModel) {
    return await this.userService.create(bookItem);
  }

  @Post('deleteUser')
  async delete(@Body() id: string) {
   return await this.userService.delete(id);
 }
}