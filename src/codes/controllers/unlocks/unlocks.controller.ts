import { Body, Controller, Post } from '@nestjs/common';
import { UnlockLaunchCodeDto } from '../../dto/unlock-launch-code.dto';
import { CodesService } from '../../codes.service';

@Controller('unlock')
export class UnlocksController {
  constructor(private readonly codesService: CodesService) {}

  @Post()
  create(@Body() unlockLaunchCode: UnlockLaunchCodeDto): Promise<void> {
    return this.codesService.unlock(unlockLaunchCode);
  }
}
