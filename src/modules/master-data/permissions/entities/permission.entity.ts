import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('md_permissions')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 100 })
  code: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 100 })
  resource: string;

  @Column({ length: 50 })
  action: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ default: true })
  is_active: boolean;

 
  
}
