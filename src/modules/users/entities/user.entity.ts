import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { UsersDepartment } from '../../master-data/users-departments/entities/users-department.entity';

@Entity('users')
@Index('IDX_users_email', ['email'], { unique: true })
@Index('IDX_users_employee_code', ['employee_code'], { unique: true })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  employee_code: string;

  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  profile_image: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 1 user มีหลาย record ใน table กลาง
  @OneToMany(
    () => UsersDepartment,
    (ud) => ud.user_id,
  )
  userDepartments!: UsersDepartment[];
  
}
