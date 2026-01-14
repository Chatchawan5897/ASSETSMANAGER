import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';


import { Role } from '../../roles/entities/role.entity';
import { Permission } from '../../permissions/entities/permission.entity';


@Entity('md_roles_permissions')
export class RolesPermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // // ---------- FK column ----------
  // @Column({ type: 'uuid', nullable: false })
  // role_id!: string;

  // @Column({ type: 'uuid', nullable: false })
  // permission_id!: string;

  @Column({ default: true })
  is_active: boolean;

    // 🔗 role
  @ManyToOne(() => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id' })
  role!: Role;

  // 🔗 permission
  @ManyToOne(() => Permission, (permission) => permission.id)
  @JoinColumn({ name: 'permission_id' })
  permission!: Permission;

  
}
