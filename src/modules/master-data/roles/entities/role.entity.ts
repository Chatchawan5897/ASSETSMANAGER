import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Index,
} from 'typeorm';



@Entity('md_roles')
@Index('IDX_roles_code', ['code'], { unique: true })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id!: string; // <-- ใส่ ! บอก TS ว่ามันจะมีค่าแน่นอน

  @Column({ type: 'varchar', length: 100, unique: true })
  code!: string;

  @Column({ type: 'varchar', length: 150 })
  name_en!: string;

  @Column({ type: 'varchar', length: 150 })
  name_th!: string;

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
  
 
}
