import { Module } from '@nestjs/common';
import { UserController } from './interface/http/user.controller';
import { UserService } from './application/use-case/create-user.service';
import { UserRepositories } from './infrastructure/repositories/user.repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserORM } from './infrastructure/typeorm/user.orm.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserORM])],
    controllers: [UserController],
    providers: [UserService, UserRepositories],
    exports: [UserService]
})
export class UserModule {}
