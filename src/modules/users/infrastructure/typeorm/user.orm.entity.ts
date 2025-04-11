import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RuleORM } from '../../../rules/infrastructure/typeorm/rules.orm.entity';

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

    @ManyToOne(() => RuleORM, (rule) => rule.users, { eager: true })
    rule: string;
}
