import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import {User} from './entities/user.entity';
import {Event} from './entities/event.entity';


@Injectable()
export class CalendarDbService {

    constructor(
        @Inject('UserCalerndarRepository')
        private userRepository: Repository<User>,
        @Inject('EventRepository')
        private eventRepository: Repository<Event>){}

    async findOne(id: number): Promise<User> {

        const user = await this.userRepository.findOne({
            where:{id},
            relations: ['events']
        });

        if(!user) {
            throw new NotFoundException("No user with such id");
        }

        return user;
    }

    async saveAllEvents(events: Event[]): Promise<Event[]>{

        return await this.eventRepository.save(events);
    }

    async createOne(): Promise<User> {
        
        return this.userRepository.save(new User());
    }
}
