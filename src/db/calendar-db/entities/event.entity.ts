import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {User} from './user.entity';

@Entity()
export class Event{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    localName: string;

    @Column({type: 'date'})
    date: string;

    @Column()
    country: string;

    @ManyToOne(() => User, user => user.events, {onDelete: 'CASCADE'})
    user: User;
}