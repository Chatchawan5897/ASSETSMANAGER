// DTO → ใช้รับ / ส่งข้อมูลผ่าน API
import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

