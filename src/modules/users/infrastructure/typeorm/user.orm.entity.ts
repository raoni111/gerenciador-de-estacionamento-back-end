import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleORM } from '../../../role/infrastructure/typeorm/roles.orm.entity';
import { ParkingLotORM } from 'src/modules/parking_lot/infrastructure/typeorm/parking-lot.orm.entity';

@Entity('users')
export class UserORM {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @ManyToOne(() => RoleORM, (role) => role.users, { eager: true })
    role: string;

    @OneToMany(() => ParkingLotORM, (parking) => parking.owner)
    parking_lot: ParkingLotORM[];
}
