import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersDepartmentsService } from './users-departments.service';
import { CreateUsersDepartmentDto } from './dto/create-users-department.dto';
import { UpdateUsersDepartmentDto } from './dto/update-users-department.dto';

@Controller('users-departments')
export class UsersDepartmentsController {
  constructor(private readonly usersDepartmentsService: UsersDepartmentsService) {}

  @Post()
  create(@Body() createUsersDepartmentDto: CreateUsersDepartmentDto) {
    return this.usersDepartmentsService.create(createUsersDepartmentDto);
  }

  @Get()
  findAll() {
    return this.usersDepartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersDepartmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersDepartmentDto: UpdateUsersDepartmentDto) {
    return this.usersDepartmentsService.update(+id, updateUsersDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersDepartmentsService.remove(+id);
  }
}
