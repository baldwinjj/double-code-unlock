import { IsMongoId, IsString } from 'class-validator';
import { ObjectId, Types } from 'mongoose';

export class UnlockLaunchCodeDto {
  @IsMongoId()
  id: Types.ObjectId;

  @IsString()
  secretKey: string;
}
