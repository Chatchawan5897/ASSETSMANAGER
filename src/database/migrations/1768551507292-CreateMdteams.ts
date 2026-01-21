import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdteams1768551507292 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'md_teams',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'department_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'name_th',
            type: 'varchar',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ย้อนกลับการเปลี่ยนแปลงที่นี่
    // await queryRunner.dropColumn('users', 'new_field');
    await queryRunner.dropTable('md_teams');
  }
}
