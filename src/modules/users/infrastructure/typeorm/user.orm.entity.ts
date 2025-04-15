import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleORM } from '../../../role/infrastructure/typeorm/roles.orm.entity';

@Entity('users')
export class UserORM {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => RoleORM, (role) => role.users, { eager: true })
    role: string;
}
