import { Injectable } from '@nestjs/common';
import { CreateUsersDepartmentDto } from './dto/create-users-department.dto';
import { UpdateUsersDepartmentDto } from './dto/update-users-department.dto';

@Injectable()
export class UsersDepartmentsService {
  create(createUsersDepartmentDto: CreateUsersDepartmentDto) {
    return 'This action adds a new usersDepartment';
  }

  findAll() {
    return `This action returns all usersDepartments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersDepartment`;
  }

  update(id: number, updateUsersDepartmentDto: UpdateUsersDepartmentDto) {
    return `This action updates a #${id} usersDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersDepartment`;
  }
}
