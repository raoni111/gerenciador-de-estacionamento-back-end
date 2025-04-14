import { UserORM } from '../../infrastructure/typeorm/user.orm.entity';
import { User } from '../entities/user.entity';

export interface IUserRepositories {
    save(_user: User): Promise<any>;
    getAll(): Promise<User[]>;
    getUserByEmail(email: string): Promise<UserORM>;
}
