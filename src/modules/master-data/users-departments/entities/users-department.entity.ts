import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../../users/entities/user.entity';
import { Department } from '../../departments/entities/department.entity';

@Entity('md_users_departments')
export class UsersDepartment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // ---------- FK column ----------
  @Column({ type: 'uuid', nullable: false })
  user_id!: string;

  @Column({ type: 'uuid', nullable: false })
  department_id!: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  // ---------- relation ----------
  @ManyToOne(() => User, (user) => user.userDepartments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Department, (department) => department.userDepartments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'department_id' })
  department!: Department;
}
