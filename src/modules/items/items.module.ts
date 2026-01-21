import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './entities/item.entity';
import { ItemCode } from './entities/item-code.entity';
import { ItemImage } from './entities/item-image.entity';
import { ItemDescription } from './entities/item-description.entity';
import { ItemDocument } from './entities/item-document.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Item,
      ItemCode,
      ItemImage,
      ItemDescription,
      ItemDocument,
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
