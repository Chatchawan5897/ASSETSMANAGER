import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateUserDto, UserResponseDto } from '../modules/users/dto/user.dto';

@Controller('api')
@ApiTags('Health Check')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({ status: 200, description: 'API is healthy' })
  getData() {
    return this.appService.getData();
  }
}
