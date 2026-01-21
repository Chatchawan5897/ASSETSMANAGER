import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity('item_descriptions')
export class ItemDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, item => item.descriptions, { onDelete: 'CASCADE' })
  item: Item;

  @Column({ type: 'varchar' ,  nullable: true})
  description: string;

  @Column({ type: 'int' })
  seq: number;
}
