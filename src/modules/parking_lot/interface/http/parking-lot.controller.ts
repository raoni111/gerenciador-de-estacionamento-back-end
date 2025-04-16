import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { GetParkingLotByOwnerDto, ParkingLotDto } from "../dto/parking-lot.dto";
import { ParkingLotService } from "../../application/parking-lot-case/parking-lot-case.service";
import { Response } from "express";

@Controller('parking_lot')
export class ParkingLotController {
    constructor(private readonly parkingLotService: ParkingLotService) {}

    @Post()
    async create(@Body() parkingLotDto: ParkingLotDto, @Res() res: Response) {
        this.parkingLotService.save(parkingLotDto).then(parkingRes => {
            res.status(200).json({
                statusCode: 200,
                message: 'Estacionamento criado com sucesso!',
                parking: parkingRes,
            });
        }).catch((e) => {
            console.log(e);
            res.status(400).json({
                statusCode: 400,
                message: 'Não foi possível criar o estacionamento',
            });
        });
    }

    @Get()
    async getAll(@Res() res: Response) {
        this.parkingLotService.getAll().then(parking_lot => {
            res.status(200).json({
                statusCode: 200,
                message: parking_lot.length === 0 ? 
                    'Nenhum estacionamento encontrado' : 
                    `Estacionamentos encontrado: ${parking_lot.length}`,
                parking_lot,
            })
        }).catch((e) => {
            console.log(e);
        })
    } 

    @Get('by/owner/:id')
    async getByOwner(@Param('id') id: string, @Res() res: Response) {
        this.parkingLotService.getByOwner(id).then(parking_lot => {
            res.status(200).json({
                statusCode: 200,
                message: parking_lot.length === 0 ? 
                    'Nenhum estacionamento encontrado' : 
                    `Estacionamentos encontrado: ${parking_lot.length}`,
                parking_lot,
            })
        }).catch((e) => {
            console.log(e);

            res.status(400).json({
                statusCode: 400,
                message: 'Não foi possível encontrar estacionamentos'
            })
        });
    }
}