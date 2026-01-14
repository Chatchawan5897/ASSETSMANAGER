import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1737015600000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'bigserial',
            isPrimary: true,
          },
          {
            name: 'employee_code',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'first_name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'phone_number',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'profile_image_path',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'email_verified_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'role_id',
            type: 'int8',
            isNullable: false,
          },
          {
            name: 'position_id',
            type: 'int8',
            isNullable: false,
          },
          {
            name: 'department_id',
            type: 'int8',
            isNullable: false,
          },
          {
            name: 'sub_department_id',
            type: 'int8',
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
            name: 'remember_token',
            type: 'varchar',
            length: '100',
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
      true, // ifNotExist
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
