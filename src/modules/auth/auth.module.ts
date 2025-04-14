import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './application/auth.service';
import { AuthController } from './interface/http/auth.controller';
import { UserModule } from '../users/user.module';
import { JwtStrategy } from './infrastructure/strategies/jwt.strategy';
import { config } from 'dotenv';
config();

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.HASH,
            signOptions: { expiresIn: '7d' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {}
