import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { databaseProviders, LoggerMiddleware } from './common';
import { AppService, BookService, AuthorService, UserService } from './services';
import { AppController, BookController, AuthorController, UserController } from './controllers';
import { BookRepository, AuthorRepository, UserRepository, AuthorInBookRepository } from './repositories';
import {JwtModule} from '@nestjs/jwt';
import { AuthService } from './services/auth.service';

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
    AuthService,
    ...databaseProviders,
    AuthorRepository,
    BookRepository,
    UserRepository,
    AuthorInBookRepository,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
  }
 
}
