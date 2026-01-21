import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity('item_images')
export class ItemImage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, item => item.images, { onDelete: 'CASCADE' })
  item: Item;


  @Column({
    name: 'image_type',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  imageType: string; // THUMBNAIL, GALLERY

  @Column({
    name: 'image_path',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  imagePath: string;

  @Column({ type: 'int', default: 1 })
  seq: number;
}
