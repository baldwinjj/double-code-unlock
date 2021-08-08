import { Status } from '../enums/status.enum';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class LaunchCodeStatusDto {
  @Expose()
  launchCode: string;
  @Expose()
  status: Status;
}
