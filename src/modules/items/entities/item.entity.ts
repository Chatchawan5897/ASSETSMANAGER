import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ItemCode } from './item-code.entity';
import { ItemImage } from './item-image.entity';
import { ItemDescription } from './item-description.entity';
import { ItemDocument } from './item-document.entity';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  /* ===== master ===== */

  @Column({
    name: 'item_type_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  itemTypeId: number;

  @Column({
    name: 'item_subtype_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  itemSubtypeId: number;

  @Column({
    name: 'assets_type_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  assetsTypeId: number;

  @Column({
    name: 'assets_status_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  assetsStatusId: number;

  @Column({
    name: 'brand_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  brandId: number;

  @Column({
    name: 'vendor_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  vendorId: number;

  /* ===== basic info ===== */
  @Column({
    name: 'name_th',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  nameTh: string;

  @Column({
    name: 'name_en',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  nameEn?: string;

  @Column({ type: 'varchar' })
  model: string;

  @Column({
    name: 'serial_no',
    type: 'varchar',
    nullable: true, // ✅ สำคัญ
  })
  serialNo: string;

  /* ===== finance ===== */

  @Column({
    name: 'price_before_vat',
    type: 'double precision',
    nullable: true, // ✅ สำคัญ
  })
  priceBeforeVat: number;

  
  @Column({
    name: 'book_value',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  bookValue?: number;

  @Column({ type: 'varchar', nullable: true })
  invoiceNo?: string;

  @Column({ type: 'date', nullable: true })
  postingDate?: Date;

  @Column({ type: 'date', nullable: true })
  assetDate?: Date;

  /* ===== properties ===== */
  @Column({ type: 'varchar', nullable: true })
  color?: string;

  @Column({ type: 'varchar', nullable: true })
  size?: string;

  @Column({ type: 'varchar', nullable: true })
  weight?: string;

  @Column({ type: 'varchar', nullable: true })
  propertyDetail?: string;

  /* ===== warranty ===== */
  @Column({
    name: 'warranty_type_id',
    type: 'bigint',
    nullable: true, // ✅ สำคัญ
  })
  warrantyTypeId: number;

  @Column({ type: 'boolean', default: false })
  isWarrantyLifetime: boolean;

  @Column({ type: 'bigint', nullable: true })
  monthOfWarranty?: number;

  @Column({ type: 'date', nullable: true })
  warrantyStartDate?: Date;

  @Column({ type: 'date', nullable: true })
  warrantyEndDate?: Date;

  /* ===== flags ===== */
  @Column({ type: 'boolean', default: false })
  isGroup: boolean;

  @Column({ type: 'boolean', default: true })
  canBorrow: boolean;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  /* ===== relations ===== */
  @OneToMany(() => ItemCode, (code) => code.item)
  codes: ItemCode[];

  @OneToMany(() => ItemImage, (image) => image.item)
  images: ItemImage[];

  @OneToMany(() => ItemDescription, (desc) => desc.item)
  descriptions: ItemDescription[];

  @OneToMany(() => ItemDocument, (doc) => doc.item)
  documents: ItemDocument[];

  /* ===== audit ===== */
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
