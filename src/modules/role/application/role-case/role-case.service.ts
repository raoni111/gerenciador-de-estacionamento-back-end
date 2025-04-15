import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/repositories/role.repository';
import { Role } from '../../domain/entities/role.entity';

@Injectable()
export class RoleService {
    constructor(private readonly roleRepo: RoleRepository) {}

    public async save(input: Role) {
        const role = new Role(input.name);

        return this.roleRepo.save(role);
    }
}
