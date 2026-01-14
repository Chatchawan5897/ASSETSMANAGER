import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveDuplicateIsActiveFromDepartments1671239999999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // ลบ column ซ้ำ (แก้ชื่อให้ตรงกับ DB)
    await queryRunner.dropColumn("md_departments", "is_active"); // <-- แก้ชื่อ column จริง ๆ
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ถ้าต้อง revert กลับ column ซ้ำ
    await queryRunner.addColumn("md_departments", new TableColumn({
      name: "is_active1",
      type: "boolean",
      default: true,
    }));
  }
}
