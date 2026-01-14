// src/database/seeds/department.seed.ts
import { AppDataSource } from '../data-source';
import { Department } from '../../modules/master-data/departments/entities/department.entity';

export async function seedDepartments() {
  const departmentRepository = AppDataSource.getRepository(Department);

  const departments: Partial<Department>[] = [
    { code: 'HR',  name_en: 'Human Resources and Administration', name_th: 'ทรัพยากรบุคคลและธุรการ' },
    { code: 'LAW', name_en: 'Legal', name_th: 'กฎหมาย' },
    { code: 'IT',  name_en: 'Information Technology', name_th: 'เทคโนโลยีสารสนเทศ' },
    { code: 'PUR', name_en: 'Purchasing', name_th: 'จัดซื้อ' },
    { code: 'ACC', name_en: 'Accounting', name_th: 'บัญชี' },
    { code: 'FIN', name_en: 'Finance', name_th: 'การเงิน' },
    { code: 'WHR', name_en: 'Warehouse & Logistics', name_th: 'คลังสินค้าและขนส่ง' },
    { code: 'SV',  name_en: 'Services', name_th: 'บริการ' },
    { code: 'SAL', name_en: 'Sales', name_th: 'ขาย' },
    { code: 'BDM', name_en: 'Business Development & Marketing', name_th: 'พัฒนาธุรกิจและการตลาด' },
    { code: 'BO',  name_en: 'Business Operation', name_th: 'ปฏิบัติการธุรกิจ' },
    { code: 'IA',  name_en: 'Internal Audit', name_th: 'Internal Audit' },
    { code: 'EXE', name_en: 'Executive', name_th: 'บริหาร' },
    { code: 'CON', name_en: 'Consultant', name_th: 'ที่ปรึกษา' },
    { code: 'CEN', name_en: 'Central Department', name_th: 'ส่วนกลางแผนก' },
  ];

  for (const department of departments) {
    const exists = await departmentRepository.findOne({ where: { code: department.code } });
    if (!exists) {
      const departmentEntity = departmentRepository.create(department);
      await departmentRepository.save(departmentEntity);
      console.log(`Department ${department.code} created`);
    } else {
      console.log(`Department ${department.code} already exists`);
    }
  }

  console.log('🌱 Departments seeding completed successfully');
}
