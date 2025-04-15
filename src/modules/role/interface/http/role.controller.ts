import { Body, Controller, Post, Res } from '@nestjs/common';
import { RoleService } from '../../application/role-case/role-case.service';
import { RoleDto } from '../dto/role.dto';
import { Response } from 'express';

@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Post()
    public async save(@Body() roleDto: RoleDto, @Res() res: Response) {
        this.roleService
            .save(roleDto)
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    message: 'Permissão criada com sucesso',
                    data: {
                        roleDto
                    }
                });
            })
            .catch(() => {
                res.status(400).json({
                    statusCode: 400,
                    message: 'Não foi possível criar a permissão!'
                });
            });
    }
}
