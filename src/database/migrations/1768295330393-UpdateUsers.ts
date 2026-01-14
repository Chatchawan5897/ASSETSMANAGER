import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUsers1768295330393 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'role');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    void queryRunner; // prevent 'defined but never used' warning
    return Promise.resolve();
  }
}
