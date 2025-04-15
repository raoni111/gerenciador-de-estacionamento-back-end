import { RoleORM } from '../../infrastructure/typeorm/roles.orm.entity';
import { Role } from '../entities/role.entity';

export interface IRoleRepository {
    save(role: Role): Promise<RoleORM>;
}
