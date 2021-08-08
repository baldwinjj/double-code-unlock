import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { NewLaunchCodeDto } from './dto/new-launch-code.dto';
import { CodesService } from './codes.service';
import { Code } from './entities/code.entity';
import { NewLaunchCodeResponseDto } from './dto/new-launch-code-response.dto';
import { plainToClass } from 'class-transformer';

@Controller('code')
export class CodesController {
  constructor(private readonly codesService: CodesService) {}

  @Post()
  async create(@Body() newLaunchCodeDto: NewLaunchCodeDto): Promise<NewLaunchCodeResponseDto> {
    const codeModel = await this.codesService.create(newLaunchCodeDto);
    return plainToClass(NewLaunchCodeResponseDto, codeModel);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return;
  }
}
