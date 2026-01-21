import { AppDataSource } from '../data-source';
import { Team } from '../../modules/master-data/teams/entities/team.entity';
import { Department } from '../../modules/master-data/departments/entities/department.entity';

export async function seedTeams() {
  const teamRepository = AppDataSource.getRepository(Team);
  const deptRepository = AppDataSource.getRepository(Department);

  // 1. ดึง department ทั้งหมด
  const departments = await deptRepository.find();

  // 2. ทำ map ไว้ lookup ง่าย ๆ
  const deptMap = new Map(
    departments.map((d) => [d.code, d]),
  );

  // 3. เตรียมข้อมูล teams (อ้างอิงด้วย code)
  const teams = [
    {
      departmentCode: 'FIN',
      name_th: 'การเงินจ่าย',
    },
    {
      departmentCode: 'FIN',
      name_th: 'การเงินรับ',
    },
    {
      departmentCode: 'ACC',
      name_th: 'บัญชีต้นทุน',
    },
  ];

  // 4. แปลงเป็น entity ที่พร้อม insert
  const teamEntities = teams.map((t) => {
    const dept = deptMap.get(t.departmentCode);

    if (!dept) {
      throw new Error(`Department code ${t.departmentCode} not found`);
    }

    return teamRepository.create({
      name_th: t.name_th,
      department_id: dept.id, // ✅ ใช้แค่นี้
    });
  });

  // 5. save (run ซ้ำได้ถ้าไม่มี unique)
  await teamRepository.save(teamEntities);

  console.log('✅ Seed teams completed');
}
