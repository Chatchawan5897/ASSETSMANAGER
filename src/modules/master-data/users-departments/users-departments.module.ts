import { Module } from '@nestjs/common';
import { UsersDepartmentsService } from './users-departments.service';
import { UsersDepartmentsController } from './users-departments.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersDepartment } from './entities/users-department.entity';
import { Department } from '../departments/entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersDepartment, Department])],
  controllers: [UsersDepartmentsController],
  providers: [UsersDepartmentsService],
})
export class UsersDepartmentsModule {}