import { IsString } from 'class-validator';

export class UnlockLaunchCodeDto {
  @IsString()
  id: string;

  @IsString()
  secretKey: string;
}
