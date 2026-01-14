import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateMdDepartments1768359636065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE md_departments
      RENAME COLUMN " is_active" TO is_active
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE md_departments
      RENAME COLUMN is_active TO " is_active"
    `);
  }
}
