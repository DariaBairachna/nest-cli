import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { databaseProviders, LoggerMiddleware } from './common';
import { AppService, BookService, AuthorService, UserService } from './services';
import { AppController, BookController, AuthorController, UserController } from './controllers';
import { BookRepository, AuthorRepository, UserRepository } from './repositories';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({ secret: 'hard!to-guess_secret' })
  ],
  controllers: [
    AppController,
    BookController,
    AuthorController,
    UserController,
  ],
  providers: [
    AppService,
    BookService,
    UserService,
    AuthorService,
    ...databaseProviders,
    AuthorRepository,
    BookRepository,
    UserRepository,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
  }
 
}
