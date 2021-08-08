import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from '../enums/status.enum';

@Schema()
export class Code extends Document {
  @Prop({ required: true })
  launchCode: string;

  @Prop({ type: [String], required: true })
  secretKeys: string[];

  @Prop({ type: String, enum: Object.values(Status), default: Status.Locked })
  status: Status;
}

export const CodeSchema = SchemaFactory.createForClass(Code);
