import { Test, TestingModule } from '@nestjs/testing';
import { UnlocksController } from './unlocks.controller';

describe('UnlocksController', () => {
  let controller: UnlocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnlocksController],
    }).compile();

    controller = module.get<UnlocksController>(UnlocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
