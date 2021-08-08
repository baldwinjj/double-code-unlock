import { IsMongoId, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class UnlockLaunchCodeDto {
  @IsMongoId()
  id: ObjectId;

  @IsString()
  secretKey: string;
}
