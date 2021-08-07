import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodesController } from './codes/codes.controller';
import { UnlocksController } from './unlocks/unlocks.controller';

@Module({
  imports: [],
  controllers: [AppController, CodesController, UnlocksController],
  providers: [AppService],
})
export class AppModule {}
