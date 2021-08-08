import { Injectable, NotFoundException } from '@nestjs/common';
import { NewLaunchCodeDto } from './dto/new-launch-code.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Code } from './entities/code.entity';
import { Model, ObjectId, Types } from 'mongoose';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import { UnlockLaunchCodeDto } from './dto/unlock-launch-code.dto';
import { Unlock } from './entities/unlock.entity';
import { ConfigService } from '@nestjs/config';
import { Status } from './enums/status.enum';

@Injectable()
export class CodesService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Code.name) private readonly codeModel: Model<Code>,
    @InjectModel(Unlock.name) private readonly unlockModel: Model<Unlock>,
  ) {}

  /**
   * Creates a new launch key and generates two secret keys for it
   * @param newLaunchCodeDto
   */
  create(newLaunchCodeDto: NewLaunchCodeDto): Promise<Code> {
    // the number of secret keys could be configurable here as well
    // TODO: encrypt the keys stored in the DB
    const secretKeys = Array(2)
      .fill(null)
      .map(() => randomStringGenerator());
    const code = new this.codeModel({ ...newLaunchCodeDto, secretKeys });
    return code.save();
  }

  /**
   * Retrieves the launch key by its id
   * @param id
   */
  async findOne(id: Types.ObjectId) {
    const code = await this.codeModel.findOne({ _id: id }).exec();
    if (!code) {
      throw new NotFoundException(`Code not found`);
    }
    return code;
  }

  /**
   * Adds an unlock event to the DB. If an unlock event exists within a given
   * timeframe for each of a code's security keys, unlock the code.
   * @param id
   * @param secretKey
   */
  async unlock({ id, secretKey }: UnlockLaunchCodeDto) {
    const code = await this.findOne(id);
    if (!code) {
      throw new NotFoundException(`LaunchCode not found`);
    }
    // create unlock document:
    if (code.secretKeys.includes(secretKey)) {
      const unlock = new this.unlockModel({ code, secretKey: secretKey });
      await unlock.save();
    }
    // retrieve unlock events for code within timeframe:
    const interval = this.configService.get<number>('UNLOCK_TIMESPAN');
    const startDateTime = new Date(new Date().getTime() - interval);
    const unlockKeys: string[] = (
      await this.unlockModel.find({
        code,
        createdAt: { $gt: startDateTime },
      })
    ).map((unlock) => unlock.secretKey);
    // if every secretKey exists within timespan, unlock
    if (code.secretKeys.every((key) => unlockKeys.includes(key))) {
      await this.codeModel.updateOne(
        { _id: id },
        { $set: { status: Status.Unlocked } },
      );
    }
  }
}
