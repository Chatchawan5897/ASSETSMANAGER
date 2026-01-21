const fs = require('fs');
const path = require('path');

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Usage: node create-migration.js <MigrationName>');
  process.exit(1);
}

const timestamp = Date.now();
const fileName = `${timestamp}-${migrationName}.ts`;
const filePath = path.join(__dirname, '../database/migrations', fileName);

// Convert PascalCase to camelCase for class name with timestamp
const className = `${migrationName}${timestamp}`;

const template = `import { MigrationInterface, QueryRunner } from 'typeorm';

export class ${className} implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // TODO: Add migration logic
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // TODO: Add rollback logic
  }
}
`;

fs.writeFileSync(filePath, template);
console.log(`Migration created: ${fileName}`);
