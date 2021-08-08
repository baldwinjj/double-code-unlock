import { IsString } from 'class-validator';

export class NewLaunchCodeDto {
  @IsString()
  launchCode: string;
}
