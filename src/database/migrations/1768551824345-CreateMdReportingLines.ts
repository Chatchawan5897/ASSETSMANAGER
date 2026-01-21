import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdReportingLines1768551824345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'md_reporting_lines',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'manager_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'subordinate_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'team_id',
            type: 'uuid',
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ย้อนกลับการเปลี่ยนแปลงที่นี่
    // await queryRunner.dropColumn('users', 'new_field');
     await queryRunner.dropTable('md_reporting_lines');
  }
}
