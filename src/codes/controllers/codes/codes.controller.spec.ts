import { Test, TestingModule } from '@nestjs/testing';
import { CodesController } from './codes.controller';
import { CodesService } from '../../codes.service';
import { NewLaunchCodeDto } from '../../dto/new-launch-code.dto';
import * as mongoose from 'mongoose';

jest.mock('../../codes.service');

describe('CodesController', () => {
  let controller: CodesController;
  let codesService: CodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodesController],
      providers: [CodesService],
    }).compile();

    controller = module.get<CodesController>(CodesController);
    codesService = module.get<CodesService>(CodesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Post /code', () => {
    it('should call CodeService.create()', () => {
      controller.create(new NewLaunchCodeDto());
      expect(codesService.create).toHaveBeenCalled();
    });
  });

  describe('Get /code', () => {
    it('should call CodeService.findOne()', () => {
      controller.findOne(new mongoose.mongo.ObjectId());
      expect(codesService.findOne).toHaveBeenCalled();
    });
  });
});
