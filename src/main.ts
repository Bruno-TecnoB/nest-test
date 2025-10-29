/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { MyExceptionFilter } from './common/filters/my-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalFilters(new MyExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
