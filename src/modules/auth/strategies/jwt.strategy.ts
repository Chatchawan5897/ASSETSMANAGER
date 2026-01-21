// เอาไว้ตรวจสอบ token
// modules/auth/strategies/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

export interface JwtPayload {
  sub: number;
  employee_code: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET ?? 'dev-secret-key',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findByEmployeecode(
      payload.employee_code
    );

    if (!user) {
      throw new UnauthorizedException('Invalid token: user does not exist');
    }

    return {
      id: user.id,
      userId: payload.sub,
      employee_code: payload.employee_code,
    };
  }
}
