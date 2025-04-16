import { ParkingLotORM } from '../../infrastructure/typeorm/parking-lot.orm.entity';
import { ParkingLot } from '../entity/parking-lot.entity';

export interface IParkingLotRepository {
    save(parking: ParkingLot): Promise<ParkingLotORM>;
    getAll(): Promise<ParkingLotORM[]>;
    getByOwner(userId: string): Promise<ParkingLotORM[]>;
}
