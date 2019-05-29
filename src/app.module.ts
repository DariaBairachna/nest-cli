import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { LoggerMiddleware } from './common/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TestController);
  }
 
}
 