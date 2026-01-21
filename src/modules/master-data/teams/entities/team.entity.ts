

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'md_teams' })
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  department_id: string;

  @Column({ type: 'varchar', length: 255 })
  name_th: string;
}

