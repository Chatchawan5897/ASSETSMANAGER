#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('❌ กรุณาระบุชื่อ migration');
  console.log('ตัวอย่าง: yarn migration:new AddDepartmentField');
  process.exit(1);
}

const timestamp = Date.now();
const className = migrationName + timestamp;
const fileName = `${timestamp}-${migrationName}.ts`;

const content = `import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ${className} implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // เพิ่มการเปลี่ยนแปลงที่นี่
    // ตัวอย่าง:
    // await queryRunner.addColumn('users', new TableColumn({
    //   name: 'new_field',
    //   type: 'varchar',
    //   length: '100',
    //   isNullable: true
    // }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // ย้อนกลับการเปลี่ยนแปลงที่นี่
    // await queryRunner.dropColumn('users', 'new_field');
  }
}
`;

const migrationDir = path.join(__dirname, '../database/migrations');
const filePath = path.join(migrationDir, fileName);

fs.writeFileSync(filePath, content);

console.log(`✅ สร้างไฟล์สำเร็จ: src/database/migrations/${fileName}`);
console.log(`\n📝 แก้ไขไฟล์แล้วรัน: yarn migration:run`);
