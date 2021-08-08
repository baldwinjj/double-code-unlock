import { Test, TestingModule } from '@nestjs/testing';
import { CodesController } from './codes.controller';
import { CodesService } from '../../codes.service';

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
});
