import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMdUserRolesTable1768288307312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
   await queryRunner.createTable(
         new Table({
           name: 'md_roles',
           columns: [
             {
               name: 'id',
               type: 'bigserial',
               isPrimary: true,
             },
             {
               name: 'user_id',
               type: 'int8',
               isNullable: false,
             },
             {
               name: 'role_id',
               type: 'int8',
               isNullable: false,
             }
           ],
         }),
         true,
       );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('md_user_roles');
  }
}
