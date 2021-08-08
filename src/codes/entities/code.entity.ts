import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Code extends Document {
  @Prop({ required: true })
  launchCode: string;

  @Prop({ type: [String], required: true })
  secretKeys: string[];
}

export const CodeSchema = SchemaFactory.createForClass(Code);
