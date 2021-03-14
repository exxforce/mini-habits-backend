import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Habit from './Habit';
import HabitChallenge from './HabitChallenge';
import User from './User';

@Entity('habits_users')
class HabitUser {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  habits_id: string;

  @ManyToOne(() => Habit)
  @JoinColumn({ name: 'habits_id' })
  habit: Habit;

  @Column()
  habits_challenges_id: string;

  @ManyToOne(() => HabitChallenge)
  @JoinColumn({ name: 'habits_challenges_id' })
  habitChallenge: HabitChallenge;

  @Column()
  experience: number;

  @Column()
  time_sunday: Date;

  @Column()
  time_monday: Date;

  @Column()
  time_tuesday: Date;

  @Column()
  time_wednesday: Date;

  @Column()
  time_thursday: Date;

  @Column()
  time_friday: Date;

  @Column()
  time_saturday: Date;

  @Column()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default HabitUser;
