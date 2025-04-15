import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './infrastructure/repositories/role.repository';
import { RoleService } from './application/role-case/role-case.service';
import { RoleController } from './interface/http/role.controller';
import { RoleORM } from './infrastructure/typeorm/roles.orm.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RoleORM])],
    controllers: [RoleController],
    providers: [RoleRepository, RoleService]
})
export class RoleModule {}
