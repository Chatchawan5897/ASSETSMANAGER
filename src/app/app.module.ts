import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from '../config/database.config';

import { UsersModule } from '../modules/users/users.module';
import { UsersDepartmentsModule } from '../modules/master-data/users-departments/users-departments.module';
import { DepartmentsModule } from '../modules/master-data/departments/departments.module';
import { ItemsModule } from '../modules/items/items.module';
import { AuthModule } from '../modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,UsersDepartmentsModule , DepartmentsModule , ItemsModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
