import { IsEmail, MinLength } from 'class-validator';

export class AuthDto {
    @IsEmail()
    email: string;
    @MinLength(8)
    password: string;
}
