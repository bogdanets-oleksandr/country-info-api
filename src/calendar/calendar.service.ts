import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { skip } from 'node:test';
import { CalendarDbService } from 'src/db/calendar-db/calendar-db.service';
import { Event } from 'src/db/calendar-db/entities/event.entity';
import { User } from 'src/db/calendar-db/entities/user.entity';


@Injectable()
export class CalendarService {

    holidaysBaseUrl = process.env.HOLIDAY_BASE_URL || "";
    @Inject()
    calendarDb: CalendarDbService;

    async addHolidays(userId: number, countryCode: string, year: number, holidays?: string[]): Promise<string>{

        const user = await this.calendarDb.findOne(userId);

        const resp = await fetch(this.holidaysBaseUrl + year + "/" + countryCode);

        if (resp.status !== 200) {
            throw new BadRequestException("Invalid country code or year");
        }

        const holidaysJson = await resp.json();

        const result = await this.calendarDb.saveAllEvents(this.mapEventJsonToEntity(holidaysJson, user, holidays));

        return result.length + " events were inserted";
    }

    mapEventJsonToEntity(json: any[], user: User, holidays?: string[]): Event[] {

        var events: Event[] = [];

        json.forEach(element => {
            if (holidays && !holidays.includes(element.name)) {
                return;
            }
            var event = new Event();
            event.country = element.countryCode;
            event.date = element.date;
            event.name = element.name;
            event.localName = element.localName;
            event.user = user;
            events.push(event);
        });

        return events;
    }

    async createUser(): Promise<User> {
        return await this.calendarDb.createOne();
    }
}
