import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Event, event => event.user, {cascade: true})
    events: Event[];
}