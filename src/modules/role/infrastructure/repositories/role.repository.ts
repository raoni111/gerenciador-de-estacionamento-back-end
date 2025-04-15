import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../domain/entities/role.entity';
import { IRoleRepository } from '../../domain/repositories/role.repositories.interface';
import { RoleORM } from '../typeorm/roles.orm.entity';
import { Repository } from 'typeorm';

export class RoleRepository implements IRoleRepository {
    constructor(
        @InjectRepository(RoleORM)
        public readonly roleORM: Repository<RoleORM>
    ) {}

    async save(_role: Role): Promise<RoleORM> {
        const role = this.roleORM.create(_role);

        const response = await this.roleORM.save(role);

        return response;
    }
}
