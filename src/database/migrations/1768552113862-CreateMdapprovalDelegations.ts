import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdApprovalDelegations1768552113862
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'md_approval_delegations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'gen_random_uuid()',
          },
          {
            name: 'delegator_id', // manager ตัวจริง
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'delegate_id', // คนที่อนุมัติแทน
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'scope', // TEAM, DEPT, GLOBAL
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'ref_id', // เช่น team_id
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'start_date',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'end_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('md_approval_delegations');
  }
}
