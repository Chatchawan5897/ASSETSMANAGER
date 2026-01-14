// src/database/seeds/role.seed.ts
import { AppDataSource } from '../data-source';
import { Role } from '../../modules/master-data/roles/entities/role.entity';

export async function seedRoles() {
  const roleRepository = AppDataSource.getRepository(Role);

  const roles: Partial<Role>[] = [
    {
      code: 'ADMIN',
      name_en: 'Administrator',
      name_th: 'ผู้ดูแลระบบ',
      is_active: true,
    
    },
    {
      code: 'USER',
      name_en: 'User',
      name_th: 'ผู้ใช้งาน',
      is_active: true,
    
    },
    {
      code: 'MANAGER',
      name_en: 'Manager',
      name_th: 'ผู้จัดการ',
      is_active: true,
     
    },
  ];

  for (const role of roles) {
    const exists = await roleRepository.findOne({ where: { code: role.code } });
    if (!exists) {
      const roleEntity = roleRepository.create(role);
      await roleRepository.save(roleEntity);
      console.log(`Role ${role.code} created`);
    } else {
      console.log(`Role ${role.code} already exists`);
    }
  }

  console.log('🌱 Roles seeding completed successfully');
}
