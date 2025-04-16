import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingLotORM } from './infrastructure/typeorm/parking-lot.orm.entity';
import { ParkingLotController } from './interface/http/parking-lot.controller';
import { ParkingLotRepository } from './infrastructure/repositories/parking-lot.repository';
import { ParkingLotService } from './application/parking-lot-case/parking-lot-case.service';

@Module({
    imports: [TypeOrmModule.forFeature([ParkingLotORM])],
    controllers: [ParkingLotController],
    providers: [ParkingLotRepository, ParkingLotService]
})
export class ParkingLotModule {}
