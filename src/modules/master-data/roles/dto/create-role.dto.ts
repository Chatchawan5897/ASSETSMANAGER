// DTO → ใช้รับ / ส่งข้อมูลผ่าน API
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name_en: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name_th: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

