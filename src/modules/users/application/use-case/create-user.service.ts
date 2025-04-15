import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../interface/dto/user.dto';
import { User } from '../../domain/entities/user.entity';
import { UserRepositories } from '../../infrastructure/repositories/user.repositories';
import * as bcrypt from 'bcrypt';
import { UserORM } from '../../infrastructure/typeorm/user.orm.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepo: UserRepositories) {}

    async create(input: CreateUserDto) {
        const password = await bcrypt.hash(input.password, 10);

        const user = new User(input.name, input.email, password);

        const res = this.userRepo.save(user);

        return res;
    }

    async getAll(): Promise<UserORM[]> {
        return this.userRepo.getAll();
    }

    async findByEmail(email: string): Promise<UserORM> {
        const user = await this.userRepo.getUserByEmail(email);
        return user;
    }
}
