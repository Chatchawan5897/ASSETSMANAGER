import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { UsersDepartment } from '../../users-departments/entities/users-department.entity';

@Entity('md_departments')
@Index('IDX_departments_code', ['code'], { unique: true })
export class Department {
  
  @PrimaryGeneratedColumn('uuid')
  id!: string; // <-- ใส่ ! บอก TS ว่ามันจะมีค่าแน่นอน

  @Column({ type: 'varchar', length: 100, unique: true })
  code!: string;

  @Column({ type: 'varchar', length: 150 })
  name_th!: string;

  @Column({ type: 'varchar', length: 150 })
  name_en!: string;

  @Column({ type: 'boolean', default: true })
  is_active!: boolean;

  @Column({ type: 'uuid', nullable: true })
  created_by?: string; // nullable, เป็น optional

  @Column({ type: 'uuid', nullable: true })
  updated_by?: string;

  @Column({ type: 'uuid', nullable: true })
  deleted_by?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date; // nullable

  @OneToMany(
    () => UsersDepartment,
    (ud) => ud.department_id,
  )
  userDepartments!: UsersDepartment[];
  
}
