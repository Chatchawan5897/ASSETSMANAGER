import { AppDataSource } from '../data-source';
import { User } from '../../modules/users/entities/user.entity';
import { Role } from '../../modules/master-data/roles/entities/role.entity';
import { UserRole } from '../../modules/master-data/users-roles/entities/users-role.entity';

export async function seedUsersRoles() {
  console.log('🌱 Seeding users_roles...');

  const userRepo = AppDataSource.getRepository(User);
  const roleRepo = AppDataSource.getRepository(Role);
  const userRoleRepo = AppDataSource.getRepository(UserRole);

  // ดึง users ทั้งหมด
  const users = await userRepo.find();
  // ดึง roles ทั้งหมด
  const roles = await roleRepo.find();

  if (!users.length || !roles.length) {
    console.log('⚠️  No users or roles found, skipping users_roles seeding.');
    return;
  }

  // ตัวอย่าง mock data: assign first role ให้ user ทุกคน
  for (const user of users) {
    const firstRole = roles[0];

    // เช็คว่า relation นี้ยังไม่มี
    const exists = await userRoleRepo.findOne({
      where: { user_id: user.id , role_id: firstRole.id },
    });

    if (!exists) {
      const userRole = userRoleRepo.create({
        user_id: user.id,
        role_id: firstRole.id,
      });
      await userRoleRepo.save(userRole);
      console.log(`✅ Assigned role ${firstRole.code} to user ${user.employee_code}`);
    }
  }

  console.log('🌱 Users_roles seeding completed.');
}
