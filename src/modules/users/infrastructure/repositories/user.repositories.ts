import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepositories } from '../../domain/repositories/user.repositories.interface';
import { UserORM } from '../typeorm/user.orm.entity';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

export class UserRepositories implements IUserRepositories {
    constructor(
        @InjectRepository(UserORM)
        private readonly repoORM: Repository<UserORM>
    ) {}

    public async save(_user: User): Promise<UserORM> {
        const user = this.repoORM.create(_user);

        const response = await this.repoORM.save(user);

        return response;
    }

    public async getAll(): Promise<UserORM[]> {
        const users: UserORM[] = await this.repoORM.find({
            select: ['id', 'name', 'email', 'role']
        });

        return users;
    }

    public async getUserByEmail(email: string): Promise<UserORM> {
        const users: UserORM[] = await this.repoORM.findBy({ email });
        return users[0];
    }
}
