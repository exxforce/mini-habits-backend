import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class HabitsUsersDays1615162782848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'habits_users_days',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'habits_users_id',
            type: 'varchar',
          },
          {
            name: 'completed',
            type: 'boolean',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKHabitUser',
            referencedTableName: 'habits_users',
            referencedColumnNames: ['id'],
            columnNames: ['habits_users_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('habits_users_days');
  }
}
