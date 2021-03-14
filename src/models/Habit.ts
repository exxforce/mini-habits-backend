import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('habits')
class Habit {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  icon: string;

  @Column()
  name: string;

  @Column()
  description: string;

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

export default Habit;
