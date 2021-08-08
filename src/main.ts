import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: true,
      whitelist: true,
      errorHttpStatusCode: HttpStatus.METHOD_NOT_ALLOWED,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(8080);
}
bootstrap();
