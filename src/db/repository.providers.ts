import { DataSource } from 'typeorm';
import { User } from './calendar-db/entities/user.entity'
import { Event } from './calendar-db/entities/event.entity'

export const repositoryProviders = [
    {
      provide: 'UserCalerndarRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
      inject: ['DATA_SOURCE'],
    },
    {
        provide: 'EventRepository',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Event),
        inject: ['DATA_SOURCE'],
      },
  ];