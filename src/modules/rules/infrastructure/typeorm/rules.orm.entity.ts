import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserORM } from '../../../users/infrastructure/typeorm/user.orm.entity';

@Entity('rules')
export class RuleORM {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => UserORM, (user) => user.rule)
    users: UserORM[];
}
