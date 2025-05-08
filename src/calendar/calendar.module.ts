import { Module } from '@nestjs/common';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { databaseProviders } from 'src/db/db.providers';
import {CalendarDbService} from 'src/db/calendar-db/calendar-db.service';
import { repositoryProviders } from 'src/db/repository.providers';

@Module({
  controllers: [CalendarController],
  providers: [...databaseProviders,
    ...repositoryProviders,
    CalendarService, CalendarDbService]
})
export class CalendarModule {}
