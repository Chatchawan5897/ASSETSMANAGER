import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ConvertMdRolesIdToUuid1768292000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Ensure uuid extension exists
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // 1) Add a temporary uuid column with default
    await queryRunner.addColumn(
      'md_roles',
      new TableColumn({
        name: 'id_uuid',
        type: 'uuid',
        isNullable: false,
        default: 'uuid_generate_v4()',
      }),
    );

    // 2) Drop existing primary key on id (resolve actual constraint name dynamically)
    const pkRows: Array<{ constraint_name: string }> = await queryRunner.query(
      `SELECT tc.constraint_name
       FROM information_schema.table_constraints tc
       WHERE tc.table_name = 'md_roles' AND tc.constraint_type = 'PRIMARY KEY'`
    );
    const pkName = pkRows?.[0]?.constraint_name;
    if (pkName) {
      await queryRunner.query(`ALTER TABLE "md_roles" DROP CONSTRAINT "${pkName}"`);
    }

    // 3) Set new primary key on id_uuid
    await queryRunner.query('ALTER TABLE "md_roles" ADD PRIMARY KEY ("id_uuid")');

    // 4) Drop old id column (use raw SQL to avoid implicit PK drops)
    await queryRunner.query('ALTER TABLE "md_roles" DROP COLUMN "id"');

    // 5) Rename id_uuid -> id
    await queryRunner.query('ALTER TABLE "md_roles" RENAME COLUMN "id_uuid" TO "id"');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Recreate old bigint id column
    await queryRunner.addColumn(
      'md_roles',
      new TableColumn({
        name: 'id_bigint',
        type: 'bigserial',
        isNullable: false,
      }),
    );

    // Drop current primary key on uuid id
    const pkRowsDown: Array<{ constraint_name: string }> = await queryRunner.query(
      `SELECT tc.constraint_name
       FROM information_schema.table_constraints tc
       WHERE tc.table_name = 'md_roles' AND tc.constraint_type = 'PRIMARY KEY'`
    );
    const pkNameDown = pkRowsDown?.[0]?.constraint_name;
    if (pkNameDown) {
      await queryRunner.query(`ALTER TABLE "md_roles" DROP CONSTRAINT "${pkNameDown}"`);
    }

    // Set primary key back to bigint
    await queryRunner.query('ALTER TABLE "md_roles" ADD PRIMARY KEY ("id_bigint")');

    // Drop uuid id column and rename bigint back to id
    await queryRunner.query('ALTER TABLE "md_roles" DROP COLUMN "id"');
    await queryRunner.query('ALTER TABLE "md_roles" RENAME COLUMN "id_bigint" TO "id"');
  }
}
