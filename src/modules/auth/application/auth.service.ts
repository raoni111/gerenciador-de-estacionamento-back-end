import { Injectable } from '@nestjs/common';
import { IAuthService } from '../domain/interface/auth.service.interface';
import { UserService } from 'src/modules/users/application/use-case/create-user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserORM } from 'src/modules/users/infrastructure/typeorm/user.orm.entity';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user: UserORM = await this.userService.findByEmail(email);
        const isPassword = await bcrypt.compare(password, user.password);
        if (user && isPassword) {
            const { password, ...result } = user;

            return result;
        }

        return null;
    }

    login(login: any) {
        const payload = { sub: login.id, rule: login.rule.name };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
