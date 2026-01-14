// roles-permissions.seeder.ts
import { AppDataSource } from '../data-source';
import { Role } from '../../modules/master-data/roles/entities/role.entity';
import { Permission } from '../../modules/master-data/permissions/entities/permission.entity';
import { RolesPermission } from '../../modules/master-data/roles-permissions/entities/roles-permission.entity';

export async function seedRolesPermissions() {
  const roleRepo = AppDataSource.getRepository(Role);
  const permRepo = AppDataSource.getRepository(Permission);
  const rpRepo = AppDataSource.getRepository(RolesPermission);

  console.log('🔗 Seeding Roles-Permissions...');

  // 1️⃣ โหลด roles / permissions
  const roles = await roleRepo.find();
  const permissions = await permRepo.find();

  const roleMap = new Map(roles.map((r) => [r.code, r]));
  const permMap = new Map(permissions.map((p) => [p.code, p]));

  //   // 2️⃣ mapping rule
  //   const ROLE_PERMISSION_MAP: Record<string, string[]> = {
  //     ADMIN: ['READ', 'CREATE', 'UPDATE', 'DELETE', 'ASSIGN', 'APPROVE', 'REJECT'],
  //     MANAGER: ['READ', 'CREATE', 'APPROVE', 'REJECT'],
  //     USER: ['READ', 'CREATE'],
  //   };

  const ROLE_PERMISSION_MAP: Record<string, string[]> = {
    ADMIN: [
      'asset.read',
      'asset.create',
      'asset.update',
      'asset.delete',
      'asset.assign',

      'asset_request.read',
      'asset_request.create',
      'asset_request.approve',
      'asset_request.reject',
    ],
    MANAGER: [
      'asset.read',
      'asset.create',

      'asset_request.read',
      'asset_request.approve',
      'asset_request.reject',
    ],
    USER: ['asset.read', 'asset_request.read', 'asset_request.create'],
  };

  // 3️⃣ save
  for (const [roleCode, permCodes] of Object.entries(ROLE_PERMISSION_MAP)) {
    const role = roleMap.get(roleCode);
    if (!role) {
      console.warn(`⚠️ Role not found: ${roleCode}`);
      continue;
    }

    for (const permCode of permCodes) {
      const permission = permMap.get(permCode);
      if (!permission) {
        console.warn(`⚠️ Permission not found: ${permCode}`);
        continue;
      }

      // กันข้อมูลซ้ำ
      const exists = await rpRepo.findOne({
        where: {
          role: { id: role.id },
          permission: { id: permission.id },
        },
      });

      if (exists) continue;

      const rp = rpRepo.create({
        role,
        permission,
        is_active: true,
      });

      await rpRepo.save(rp);
    }
  }

  console.log('✅ Roles-Permissions seeded');
}
