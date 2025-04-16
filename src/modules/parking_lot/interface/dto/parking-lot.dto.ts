import { IsNotEmpty } from "class-validator";

export class ParkingLotDto {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    location: string

    @IsNotEmpty()
    owner: string
}

export class GetParkingLotByOwnerDto {
    @IsNotEmpty()
    userId: string
}