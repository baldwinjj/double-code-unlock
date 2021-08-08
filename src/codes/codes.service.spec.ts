import { Test, TestingModule } from '@nestjs/testing';
import { CodesService } from './codes.service';
import { getModelToken } from '@nestjs/mongoose';
import { Code } from './entities/code.entity';
import { Unlock } from './entities/unlock.entity';
import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';
import { NotFoundException } from '@nestjs/common';

const codeMock = {
  findOne: () => jest.fn(),
}

describe('CodesService', () => {
  let service: CodesService;
  let code;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CodesService,
        { provide: ConfigService, useValue: {} },
        { provide: getModelToken(Code.name), useValue: codeMock },
        { provide: getModelToken(Unlock.name), useValue: {} },
      ],
    }).compile();

    service = module.get<CodesService>(CodesService);
    code = module.get(getModelToken(Code.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
