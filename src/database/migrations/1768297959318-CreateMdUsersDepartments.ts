import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdUsersDepartments1768297959318 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'md_users_departments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            default: 'gen_random_uuid()' // สำหรับ PostgreSQL
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false
          },
          {
            name: 'department_id',
            type: 'uuid',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false
          },
        ],
        foreignKeys: [
          {
            name: 'FK_users_departments_user',
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
          },
          {
            name: 'FK_users_departments_department',
            columnNames: ['department_id'],
            referencedTableName: 'md_departments',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('md_users_departments');
  }
}
