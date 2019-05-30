import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { databaseProviders, LoggerMiddleware } from './common';
import { AppService, TestService } from './services';
import { AppController, TestController } from './controllers';
import { BookRepository, AuthorRepository } from './repositories';
@Module({
  imports: [
  ],
  controllers: [
    AppController,
    TestController,
  ],
  providers: [
    AppService,
    TestService,
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
