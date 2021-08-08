import { Test, TestingModule } from '@nestjs/testing';
import { UnlocksController } from './unlocks.controller';
import { CodesService } from '../../codes.service';

jest.mock('../../codes.service');

describe('UnlocksController', () => {
  let controller: UnlocksController;
  let codesService: CodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnlocksController],
      providers: [CodesService],
    }).compile();

    controller = module.get<UnlocksController>(UnlocksController);
    codesService = module.get<CodesService>(CodesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
