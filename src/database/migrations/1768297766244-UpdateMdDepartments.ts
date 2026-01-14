import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateMdDepartments1768297766244 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // เพิ่มการเปลี่ยนแปลงที่นี่
    // ตัวอย่าง:
    // await queryRunner.addColumn('users', new TableColumn({
    //   name: 'new_field',
    //   type: 'varchar',
    //   length: '100',
    //   isNullable: true
    // }));
     await queryRunner.query(`
      ALTER TABLE md_departments
      ALTER COLUMN id SET DEFAULT gen_random_uuid();
    `);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ย้อนกลับการเปลี่ยนแปลงที่นี่
    // await queryRunner.dropColumn('users', 'new_field');
    await queryRunner.query(`
      ALTER TABLE md_departments
      ALTER COLUMN id DROP DEFAULT;
    `);
  }
}
