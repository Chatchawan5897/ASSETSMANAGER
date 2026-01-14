import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddIsActiveAndRoleToUsers1705079000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // เพิ่ม column is_active
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'is_active',
        type: 'boolean',
        default: true,
      })
    );

    // เพิ่ม column role
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'role',
        type: 'varchar',
        length: '50',
        default: "'user'",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ลบ column role
    await queryRunner.dropColumn('users', 'role');
    
    // ลบ column is_active
    await queryRunner.dropColumn('users', 'is_active');
  }
}
