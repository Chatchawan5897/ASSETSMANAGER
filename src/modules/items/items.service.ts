import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepo: Repository<Item>
  ) {}

  async create(data: Partial<Item>): Promise<Item> {
    const item = this.itemRepo.create(data);
    return this.itemRepo.save(item);
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepo.find({
      relations: ['codes', 'images'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Item> {
    const item = await this.itemRepo.findOne({
      where: { id },
      relations: ['codes', 'images', 'descriptions', 'documents'],
    });

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return item;
  }

  /* =====================
   * UPDATE
   * ===================== */
  async update(id: number, data: Partial<Item>): Promise<Item> {
    const item = await this.findOne(id);
    Object.assign(item, data);
    return this.itemRepo.save(item);
  }

  /* =====================
   * DELETE (soft idea)
   * ===================== */
  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    item.isActive = false;
    await this.itemRepo.save(item);
  }
}
