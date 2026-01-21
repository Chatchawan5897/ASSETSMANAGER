import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  /* =====================
   * CREATE
   * POST /items
   * ===================== */
  @Post()
  async create(@Body() body: Partial<Item>): Promise<Item> {
    return this.itemsService.create(body);
  }

  /* =====================
   * FIND ALL
   * GET /items
   * ===================== */
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  /* =====================
   * FIND ONE
   * GET /items/:id
   * ===================== */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  /* =====================
   * UPDATE
   * PUT /items/:id
   * ===================== */
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Item>
  ): Promise<Item> {
    return this.itemsService.update(id, body);
  }

  /* =====================
   * DELETE (soft delete)
   * DELETE /items/:id
   * ===================== */
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number
  ): Promise<{ message: string }> {
    await this.itemsService.remove(id);
    return { message: 'Item removed successfully' };
  }
}
