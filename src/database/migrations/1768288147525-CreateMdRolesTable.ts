import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdRolesTable1768288147525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'md_roles',
        columns: [
          {
            name: 'id',
            type: 'bigserial',
            isPrimary: true,
          },
          {
            name: 'code',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'name_en',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'name_th',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'is_active',
            type: 'bool',
            isNullable: false,
            default: true,
          },
          {
            name: 'created_by',
            type: 'int8',
            isNullable: true,
          },
          {
            name: 'updated_by',
            type: 'int8',
            isNullable: true,
          },
          {
            name: 'deleted_by',
            type: 'int8',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('md_roles');
  }
}
