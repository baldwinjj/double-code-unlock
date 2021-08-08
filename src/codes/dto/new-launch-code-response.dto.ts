import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class NewLaunchCodeResponseDto {
  @Expose({ name: '_id' })
  id: string;

  @Expose()
  secretKeys: string[];
}
