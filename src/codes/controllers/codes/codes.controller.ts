import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { NewLaunchCodeDto } from '../../dto/new-launch-code.dto';
import { CodesService } from '../../codes.service';
import { Code } from '../../entities/code.entity';
import { NewLaunchCodeResponseDto } from '../../dto/new-launch-code-response.dto';
import { plainToClass } from 'class-transformer';
import { LaunchCodeStatusDto } from '../../dto/launch-code-status.dto';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from '../../../pipes/parse-objectid.pipe';

@Controller('code')
export class CodesController {
  constructor(private readonly codesService: CodesService) {}

  @Post()
  async create(
    @Body() newLaunchCodeDto: NewLaunchCodeDto,
  ): Promise<NewLaunchCodeResponseDto> {
    const codeModel = await this.codesService.create(newLaunchCodeDto);
    return plainToClass(NewLaunchCodeResponseDto, codeModel);
  }
  @Get(':id')
  async findOne(
    @Param('id', ParseObjectIdPipe) id: ObjectId,
  ): Promise<LaunchCodeStatusDto> {
    const codeModel = await this.codesService.findOne(id);
    return plainToClass(LaunchCodeStatusDto, codeModel);
  }
}
