import { AppDataSource } from './data-source';

async function runMigrations() {
  try {
    console.log('🔄 Connecting to database...');
    await AppDataSource.initialize();
    console.log('✅ Database connected');

    console.log('🔄 Running migrations...');
    const migrations = await AppDataSource.runMigrations();
    
    if (migrations.length === 0) {
      console.log('✅ No pending migrations');
    } else {
      console.log(`✅ ${migrations.length} migration(s) executed successfully:`);
      migrations.forEach(migration => {
        console.log(`  - ${migration.name}`);
      });
    }

    await AppDataSource.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();
