import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { databaseProviders, LoggerMiddleware } from './common';
import { AppService, TestService, BookService } from './services';
import { AppController, TestController, BookController } from './controllers';
import { BookRepository, AuthorRepository } from './repositories';
@Module({
  imports: [
  ],
  controllers: [
    AppController,
    TestController,
    BookController,
  ],
  providers: [ 
    AppService,
    TestService,
    BookService,
    ...databaseProviders,
    AuthorRepository,
    BookRepository,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TestController);
  }
 
}
