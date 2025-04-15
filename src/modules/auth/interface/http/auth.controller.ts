import { Body, Controller, Post, Res, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import { AuthService } from '../../application/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() loginDto: AuthDto, @Res() res: Response) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            res.status(400).json({
                statusCode: 400,
                message: 'Email ou senha esta incorreto'
            });
            return;
        }

        return this.authService.login(user);
    }
}
