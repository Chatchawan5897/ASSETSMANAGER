import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(employee_code: string, password: string) {
    const user = await this.usersService.findByEmployeecode(employee_code);

    if (!user) {
      throw new UnauthorizedException('Invalid employee code or password');
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Invalid employee code or password');
    }

    const payload = {
      sub: user.id,
      employee_code: user.employee_code,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
