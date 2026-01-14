import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateMdRoles1768293381935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // แปลง columns เป็น UUID
    await queryRunner.changeColumn(
      'md_roles',
      'created_by',
      new TableColumn({
        name: 'created_by',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      'md_roles',
      'updated_by',
      new TableColumn({
        name: 'updated_by',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      'md_roles',
      'deleted_by',
      new TableColumn({
        name: 'deleted_by',
        type: 'uuid',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // กลับไปเป็น bigint ตามเดิม
    await queryRunner.changeColumn(
      'md_roles',
      'created_by',
      new TableColumn({
        name: 'created_by',
        type: 'bigint',
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      'md_roles',
      'updated_by',
      new TableColumn({
        name: 'updated_by',
        type: 'bigint',
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      'md_roles',
      'deleted_by',
      new TableColumn({
        name: 'deleted_by',
        type: 'bigint',
        isNullable: true,
      })
    );
  }
}
