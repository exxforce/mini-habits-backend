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

@Entity('habits_users')
class HabitChallenge {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  habits_id: string;

  @ManyToOne(() => Habit)
  @JoinColumn({ name: 'habits_id' })
  habit: Habit;

  @Column()
  level: number;

  @Column()
  description: string;

  @Column()
  time: number;

  @Column()
  xp_reward: number;

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

export default HabitChallenge;
