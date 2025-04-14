import { AuthDto } from '../../interface/dto/auth.dto';

export interface IAuthService {
    // validateUser(email: string, passport: string): Promise<any>;
    login(user: AuthDto);
}
