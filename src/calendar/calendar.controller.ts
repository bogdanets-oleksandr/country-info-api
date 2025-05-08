import { Controller, Param, Post, Body, NotFoundException} from '@nestjs/common';
import {CalendarService} from './calendar.service';

@Controller('calendar')
export class CalendarController {

    constructor (private readonly calendarService: CalendarService
    ){}

    @Post('/users/:userId/calendar/holidays')
    async addHoliday(@Param('userId') userId: number,
    @Body() body: {
        countryCode: string,
        year: number,
        holidays?: string[]
    }): Promise<string> {

        return await this.calendarService.addHolidays(userId, body.countryCode, body.year, body.holidays);

    }

    @Post('/users/')
    async createUser(): Promise<string> {

        const user = await this.calendarService.createUser();

        return "your userId is " + user.id;
    }
}
