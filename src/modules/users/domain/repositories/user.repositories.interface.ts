import { User } from '../entities/user.entity';

export interface IUserRepositories {
    save(_user: User): Promise<any>;
    getAll(): Promise<User[]>;
}
