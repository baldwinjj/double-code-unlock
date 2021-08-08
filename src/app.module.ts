import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CodesModule } from './codes/codes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/jupiter-one'),
    CodesModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
