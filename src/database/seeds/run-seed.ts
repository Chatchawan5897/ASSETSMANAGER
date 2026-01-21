import 'reflect-metadata';
import { AppDataSource } from '../data-source';
import { seedUsers } from './user.seeder';
import { seedRoles } from './role.seeder';
import { seedUsersRoles } from './users-roles.seed';
import { seedDepartments } from './department.seeder';
import { seedUsersDepartments } from './users-departments.seeder';
import { seedPermissions } from './permission.seeder';
import { seedRolesPermissions } from './roles-permissions.seeder';
import { seedTeams } from './teams.seeder';
import { seedItems } from './items.seeder';

async function runSeeds() {
  const startTime = Date.now();
  console.log('🚀 Starting database seeding...');
  console.log('⏰ Time:', new Date().toLocaleString('th-TH'));
  console.log('---');

  try {
    await AppDataSource.initialize();
    console.log('✅ Database connected\n');

    // รัน seeders
    await seedUsers();
    await seedRoles();
    await seedUsersRoles();
    await seedDepartments();
    await seedUsersDepartments();
    await seedPermissions();
    await seedRolesPermissions();
    await seedTeams();
    await seedItems();

    await AppDataSource.destroy();

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n---');
    console.log(`✅ Seeding completed successfully in ${duration}s`);
    console.log('⏰ Finished:', new Date().toLocaleString('th-TH'));
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error during seeding:', error);
    process.exit(1);
  }
}

runSeeds();
