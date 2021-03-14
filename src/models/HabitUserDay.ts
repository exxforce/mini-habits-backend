import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import HabitUser from './HabitUser';

@Entity('habits_users')
class HabitUserDay {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  habits_users_id: string;

  @ManyToOne(() => HabitUser)
  @JoinColumn({ name: 'habits_users_id' })
  habitUser: HabitUser;

  @Column()
  completed: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default HabitUserDay;
