import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdUsersTeams1768550284023 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
          new Table({
            name: 'md_users_teams',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                default: 'gen_random_uuid()',
              },
              {
                name: 'user_id',
                type: 'uuid',
                isNullable: false,
              },
              {
                name: 'team_id',
                type: 'uuid',
                isNullable: false,
              },
              {
                name: 'is_active',
                type: 'boolean',
                default: true,
              },
            ],
          }),
          true
        );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('md_users_teams');
  }
}
