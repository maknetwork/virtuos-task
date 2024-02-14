import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports:[UsersModule, PassportModule, JwtModule.register({
    signOptions:{
      expiresIn: '60s',
    },
    secret: 'hidden',

  })],
  providers: [AuthResolver, AuthService, LocalStrategy,JwtStrategy]
})
export class AuthModule {}
