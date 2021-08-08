import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CodesModule } from './codes/codes.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    MongooseModule.forRoot(
      `${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/jupiter-one`,
    ),
    CodesModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
