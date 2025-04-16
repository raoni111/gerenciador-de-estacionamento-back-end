import { UserORM } from "src/modules/users/infrastructure/typeorm/user.orm.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn,  } from "typeorm";

@Entity('parking_lot')
export class ParkingLotORM {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    location: string

    @ManyToOne(() => UserORM, (user) => user.parking_lot, {eager: true})
    owner: string
}