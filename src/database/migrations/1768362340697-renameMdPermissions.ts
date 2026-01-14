import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenamePermissionsToMdPermissions1768362340697
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable(
      'permissions',
      'md_permissions',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable(
      'md_permissions',
      'permissions',
    );
  }
}
