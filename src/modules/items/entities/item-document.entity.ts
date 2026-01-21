import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity('item_documents')
export class ItemDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, (item) => item.documents, { onDelete: 'CASCADE' })
  item: Item;

  @Column({
    name: 'document_no',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  documentNo: string;

  @Column({
    name: 'document_tpye',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  documentType: string;

  @Column({ type: 'date', nullable: true })
  documentDate?: Date;

  @Column({ type: 'varchar', nullable: true })
  statusUpload?: string;
}
