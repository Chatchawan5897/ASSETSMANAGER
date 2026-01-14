import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateMdDepartments1768297630360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // เพิ่มการเปลี่ยนแปลงที่นี่
    // ตัวอย่าง:
    // await queryRunner.addColumn('users', new TableColumn({
    //   name: 'new_field',
    //   type: 'varchar',
    //   length: '100',
    //   isNullable: true
    // }));
     await queryRunner.addColumn(
      "md_departments",
      new TableColumn({
        name: "is_active",
        type: "boolean",
        isNullable: false,
        default: true, // default ตาม entity
      })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ย้อนกลับการเปลี่ยนแปลงที่นี่
    // await queryRunner.dropColumn('users', 'new_field');
        await queryRunner.dropColumn("md_departments", "is_active");

  }
}
