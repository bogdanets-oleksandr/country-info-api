import { Test, TestingModule } from '@nestjs/testing';
import { CalendarDbService } from './calendar-db.service';

describe('CalendarDbService', () => {
  let service: CalendarDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarDbService],
    }).compile();

    service = module.get<CalendarDbService>(CalendarDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
