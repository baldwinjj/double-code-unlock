import { Module } from '@nestjs/common';
import { CodesController } from './codes.controller';
import { CodesService } from './codes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Code, CodeSchema } from './entities/code.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Code.name, schema: CodeSchema }]),
  ],
  controllers: [CodesController],
  providers: [CodesService],
})
export class CodesModule {}
