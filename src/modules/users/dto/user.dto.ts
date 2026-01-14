import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'EMP001', description: 'Employee code' })
  @IsNotEmpty()
  employee_code: string;

  @ApiProperty({ example: 'John', description: 'First name' })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ example: '+66812345678', description: 'Phone number', required: false })
  @IsOptional()
  phone_number?: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Profile image URL', required: false })
  @IsOptional()
  profile_image?: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email address' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password (at least 6 characters)' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class UserResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'User ID' })
  id: string;

  @ApiProperty({ example: 'EMP001', description: 'Employee code' })
  employee_code: string;

  @ApiProperty({ example: 'John', description: 'First name' })
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  last_name: string;

  @ApiProperty({ example: '+66812345678', description: 'Phone number' })
  phone_number: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Profile image URL' })
  profile_image: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email address' })
  email: string;

  @ApiProperty({ example: '2024-01-13T10:30:00Z', description: 'Created at' })
  created_at: Date;

  @ApiProperty({ example: '2024-01-13T10:30:00Z', description: 'Updated at' })
  updated_at: Date;
}
