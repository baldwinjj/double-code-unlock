import { Module } from '@nestjs/common';
import { CodesController } from './controllers/codes/codes.controller';
import { CodesService } from './codes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Code, CodeSchema } from './entities/code.entity';
import { Unlock, UnlockSchema } from './entities/unlock.entity';
import { UnlocksController } from './controllers/unlocks/unlocks.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: Code.name, schema: CodeSchema },
      { name: Unlock.name, schema: UnlockSchema },
    ]),
  ],
  controllers: [CodesController, UnlocksController],
  providers: [CodesService],
})
export class CodesModule {}
