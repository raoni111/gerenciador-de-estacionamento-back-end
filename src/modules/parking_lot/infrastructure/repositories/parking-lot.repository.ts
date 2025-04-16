import { InjectRepository } from '@nestjs/typeorm';
import { IParkingLotRepository } from '../../domain/repositories/parking-lot.interface';
import { ParkingLotORM } from '../typeorm/parking-lot.orm.entity';
import { Repository } from 'typeorm';
import { ParkingLot } from '../../domain/entity/parking-lot.entity';

export class ParkingLotRepository implements IParkingLotRepository {
    constructor(
        @InjectRepository(ParkingLotORM)
        private parkingLotORM: Repository<ParkingLotORM>
    ) {}

    async save(parkingLot: ParkingLot): Promise<ParkingLotORM> {
        const parking = this.parkingLotORM.create(parkingLot);

        const response = await this.parkingLotORM.save(parking);

        return response;
    }

    async getAll(): Promise<ParkingLotORM[]> {
        const parking_lot = await this.parkingLotORM
            .createQueryBuilder('parking_lot')
            .leftJoinAndSelect('parking_lot.owner', 'owner')
            .select([
                'parking_lot.id',
                'parking_lot.name',
                'parking_lot.location',
                'owner.id',
                'owner.name',

            ]).getMany();

        return parking_lot;
    }

    async getByOwner(userId: string): Promise<ParkingLotORM[]> {
        const parking_lot = await this.parkingLotORM
            .createQueryBuilder('parking_lot')
            .leftJoinAndSelect('parking_lot.owner', 'owner')
            .select([
                'parking_lot.id',
                'parking_lot.name',
                'parking_lot.location',
                'owner.id',
                'owner.name',
            ])
            .where('owner.id = :ownerId', {ownerId: userId})
            .getMany();

        return parking_lot;
    }
}
