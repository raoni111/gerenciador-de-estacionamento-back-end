import { Injectable } from '@nestjs/common';
import { ParkingLotRepository } from '../../infrastructure/repositories/parking-lot.repository';
import { ParkingLotDto } from '../../interface/dto/parking-lot.dto';
import { ParkingLotORM } from '../../infrastructure/typeorm/parking-lot.orm.entity';
import { ParkingLot } from '../../domain/entity/parking-lot.entity';

@Injectable()
export class ParkingLotService {
    constructor(private readonly parkingLotRepo: ParkingLotRepository) {}

    async save(parkingLotDto: ParkingLotDto): Promise<ParkingLotORM> {
        const parking = new ParkingLot(
            parkingLotDto.name,
            parkingLotDto.location,
            parkingLotDto.owner
        );

        const res = await this.parkingLotRepo.save(parking);

        return res;
    }

    async getAll(): Promise<ParkingLotORM[]> {
        const parking_lot = await this.parkingLotRepo.getAll();

        return parking_lot;
    }

    async getByOwner(userId: string): Promise<ParkingLotORM[]> {
        const parking_lot = await this.parkingLotRepo.getByOwner(userId);

        return parking_lot;
    }
}
