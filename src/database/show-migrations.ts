import { AppDataSource } from './data-source';

async function showMigrations() {
  try {
    console.log('🔄 Connecting to database...');
    await AppDataSource.initialize();
    console.log('✅ Database connected\n');

    const migrations = await AppDataSource.showMigrations();
    
    if (!migrations) {
      console.log('✅ All migrations have been run');
    } else {
      console.log('⚠️  There are pending migrations');
    }

    await AppDataSource.destroy();
    process.exit(0);
  } catch (error) {
    console.error('❌ Show migrations failed:', error);
    process.exit(1);
  }
}

showMigrations();
