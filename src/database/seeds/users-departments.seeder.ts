// backend/src/database/seeds/users-departments.seeder.ts
import { AppDataSource } from '../data-source';

import { User } from '../../modules/users/entities/user.entity';
import { Department } from '../../modules/master-data/departments/entities/department.entity';
import { UsersDepartment } from '../../modules/master-data/users-departments/entities/users-department.entity';

export async function seedUsersDepartments() {
  const userRepository = AppDataSource.getRepository(User);
  const departmentRepository = AppDataSource.getRepository(Department);
  const usersDepartmentsRepo = AppDataSource.getRepository(UsersDepartment);

  // ตัวอย่าง mapping (business rule)
  const mapping: { userCode: string; departmentCodes: string[] }[] = [
    { userCode: 'EMP001', departmentCodes: ['HR', 'IT'] },
    { userCode: 'EMP002', departmentCodes: ['LAW'] },
  ];

  for (const map of mapping) {
    // 1️⃣ ดึง user
    const user = await userRepository.findOne({
      where: { employee_code: map.userCode },
    });

    if (!user) {
      console.log(`User ${map.userCode} not found`);
      continue;
    }

    for (const deptCode of map.departmentCodes) {
      const department = await departmentRepository.findOne({
        where: { code: deptCode },
      });

      if (!department) {
        console.log(`Department ${deptCode} not found`);
        continue;
      }

      const exists = await usersDepartmentsRepo.findOne({
        where: {
          user: { id: user.id },
          department: { id: department.id },
        },
      });

      if (exists) continue;

      await usersDepartmentsRepo.save({
        user, // user.id → user_id
        department, // department.id → department_id
      });
    }
  }

  console.log('🌱 Users -> Departments seeding completed');
}
