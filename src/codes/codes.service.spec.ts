import { Test, TestingModule } from '@nestjs/testing';
import { CodesService } from './codes.service';
import { getModelToken } from '@nestjs/mongoose';
import { Code } from './entities/code.entity';
import { Unlock } from './entities/unlock.entity';
import { ConfigService } from '@nestjs/config';

describe('CodesService', () => {
  let service: CodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CodesService,
        { provide: ConfigService, useValue: {} },
        { provide: getModelToken(Code.name), useValue: {} },
        { provide: getModelToken(Unlock.name), useValue: {} },
      ],
    }).compile();

    service = module.get<CodesService>(CodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
