import { AppDataSource } from '../data-source';
import { User } from '../../modules/users/entities/user.entity';
// import * as bcrypt from 'bcrypt';
import * as bcrypt from 'bcryptjs';
export async function seedUsers() {
  console.log('🌱 Seeding users...');
  const startTime = Date.now();

  const userRepository = AppDataSource.getRepository(User);

  // ตรวจสอบว่ามีข้อมูลอยู่แล้วหรือไม่
  const existingUsers = await userRepository.count();
  if (existingUsers > 0) {
    console.log('⚠️  Users already exist, skipping seed');
    return;
  }

  // สร้าง password hash
  const passwordHash = await bcrypt.hash('password123', 10);

  // ข้อมูล seed
  const users = [
    {
      employee_code: 'DTH1935',
      first_name: 'สมชาย',
      last_name: 'ใจดี',
      email: 'somchai@example.com',
      phone_number: '+66812345678',
      password: passwordHash,
      role: 'admin',
      is_active: true,
    },
    {
      employee_code: 'DTH1936',
      first_name: 'สมหญิง',
      last_name: 'รักสงบ',
      email: 'somying@example.com',
      phone_number: '+66823456789',
      password: passwordHash,
      role: 'user',
      is_active: true,
    },
    {
      employee_code: 'DTH1937',
      first_name: 'วิชัย',
      last_name: 'ทองดี',
      email: 'wichai@example.com',
      phone_number: '+66834567890',
      password: passwordHash,
      role: 'user',
      is_active: true,
    },
    {
      employee_code: 'DTH1938',
      first_name: 'สุดา',
      last_name: 'มีสุข',
      email: 'suda@example.com',
      password: passwordHash,
      role: 'user',
      is_active: false,
    },
  ];

  // บันทึกลง database
  await userRepository.save(users);

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log(`✅ Seeded ${users.length} users successfully (${duration}s)`);
}
