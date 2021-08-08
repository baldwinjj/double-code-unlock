import { Injectable, NotFoundException } from '@nestjs/common';
import { NewLaunchCodeDto } from './dto/new-launch-code.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Code } from './entities/code.entity';
import { Model } from 'mongoose';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { UnlockLaunchCodeDto } from './dto/unlock-launch-code.dto';
import { Unlock } from './entities/unlock.entity';

@Injectable()
export class CodesService {
  constructor(
    @InjectModel(Code.name) private readonly codeModel: Model<Code>,
    @InjectModel(Unlock.name) private readonly unlockModel: Model<Unlock>,
  ) {}

  create(newLaunchCodeDto: NewLaunchCodeDto): Promise<Code> {
    // the number of secret keys could be configurable here as well
    // TODO: encrypt the keys stored in the DB
    const secretKeys = Array(2)
      .fill(null)
      .map(() => randomStringGenerator());
    const code = new this.codeModel({ ...newLaunchCodeDto, secretKeys });
    return code.save();
  }

  findOne(id: string) {
    return this.codeModel.findOne({ _id: id }).exec();
  }

  async unlock({ id, secretKey }: UnlockLaunchCodeDto) {
    const code = await this.findOne(id);
    if (!code) {
      throw new NotFoundException(`LaunchCode not found`);
    }
    const unlock = new this.unlockModel({ code, secretKey: secretKey });
    await unlock.save();
    // TODO: query unlocks and unlock code if security keys match
  }
}
