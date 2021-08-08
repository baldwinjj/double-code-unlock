import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Code } from './code.entity';

@Schema({ timestamps: true })
export class Unlock extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Code', required: true })
  code: Code;

  @Prop({ required: true })
  secretKey: string;
}

export const UnlockSchema = SchemaFactory.createForClass(Unlock);
