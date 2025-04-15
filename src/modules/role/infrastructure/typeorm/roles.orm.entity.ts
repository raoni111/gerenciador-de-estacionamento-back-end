import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserORM } from '../../../users/infrastructure/typeorm/user.orm.entity';

@Entity('roles')
export class RoleORM {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => UserORM, (user) => user.role)
    users: UserORM[];
}
