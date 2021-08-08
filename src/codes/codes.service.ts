import { Injectable } from '@nestjs/common';
import { NewLaunchCodeDto } from './dto/new-launch-code.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Code } from './entities/code.entity';
import { Model } from 'mongoose';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

@Injectable()
export class CodesService {
  constructor(
    @InjectModel(Code.name) private readonly codeModel: Model<Code>,
  ) {}

  create(newLaunchCodeDto: NewLaunchCodeDto): Promise<Code> {
    // the number of secret keys could be configurable here as well
    const secretKeys = Array(2)
      .fill(null)
      .map(() => randomStringGenerator());
    const code = new this.codeModel({ ...newLaunchCodeDto, secretKeys });
    return code.save();
  }

  findOne(id: string) {
    return this.codeModel.findOne({ _id: id }).exec();
  }
}
