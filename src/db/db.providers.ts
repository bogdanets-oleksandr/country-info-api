import { DataSource } from 'typeorm';
import {User} from './calendar-db/entities/user.entity';
import {Event} from './calendar-db/entities/event.entity';


export const databaseProviders = [
    {
      provide: 'DATA_SOURCE',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT || '5432'),
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
          entities: [User, Event],
          synchronize: true,
        });
  
        return dataSource.initialize();
      },
    },
  ];