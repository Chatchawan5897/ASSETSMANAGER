import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateMdUsersRolesTable1768291477774 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1️⃣ เปลี่ยนชื่อ table
    await queryRunner.renameTable('md_user_roles', 'md_users_roles');

    // 2️⃣ แก้ type ของ column user_id
    await queryRunner.changeColumn(
      'md_users_roles',
      'user_id',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: false, // ตั้งค่า nullable ตาม requirement
      }),
    );

    // 3️⃣ แก้ type ของ column role_id (ถ้าจำเป็น)
    await queryRunner.changeColumn(
      'md_users_roles',
      'role_id',
      new TableColumn({
        name: 'role_id',
        type: 'uuid',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 1️⃣ rollback column types
    await queryRunner.changeColumn(
      'md_users_roles',
      'user_id',
      new TableColumn({
        name: 'user_id',
        type: 'int8',
        isNullable: false,
      }),
    );

    await queryRunner.changeColumn(
      'md_users_roles',
      'role_id',
      new TableColumn({
        name: 'role_id',
        type: 'int8',
        isNullable: false,
      }),
    );

    // 2️⃣ rollback table name
    await queryRunner.renameTable('md_users_roles', 'md_user_roles');
  }
}
