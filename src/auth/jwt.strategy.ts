import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('token'),
      secretOrKey: 'super-secret',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.userId,
      username: payload.username,
      email: payload.email,
    };
  }
}
