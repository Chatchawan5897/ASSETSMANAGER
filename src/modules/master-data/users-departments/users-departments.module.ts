import { Module } from '@nestjs/common';
import { UsersDepartmentsService } from './users-departments.service';
import { UsersDepartmentsController } from './users-departments.controller';

@Module({
  controllers: [UsersDepartmentsController],
  providers: [UsersDepartmentsService],
})
export class UsersDepartmentsModule {}
