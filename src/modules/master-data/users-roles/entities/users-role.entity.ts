// Entity → ใช้คุยกับ Database
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { User } from '../../../users/entities/user.entity';
import { Role } from '../../roles/entities/role.entity';
import { ManyToOne, JoinColumn } from 'typeorm';

@Entity('md_users_roles') // table name ตรงกับ DB
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'uuid' })
  role_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
