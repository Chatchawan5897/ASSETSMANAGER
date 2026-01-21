import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity('item_codes')
export class ItemCode {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, (item) => item.codes, { onDelete: 'CASCADE' })
  item: Item;

  // @Column({ type: 'varchar' })
  // codeType: string; // MAIN, SAP, OLD

  @Column({
    name: 'code_type',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  codeType?: string;

  @Column({
    name: 'code_value',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  codeValue?: string;
}
