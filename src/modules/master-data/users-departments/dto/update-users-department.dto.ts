import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDepartmentDto } from './create-users-department.dto';

export class UpdateUsersDepartmentDto extends PartialType(CreateUsersDepartmentDto) {}
