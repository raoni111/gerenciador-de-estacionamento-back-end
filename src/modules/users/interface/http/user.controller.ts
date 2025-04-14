import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from '../../application/use-case/create-user.service';
import { CreateUserDto } from '../dto/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
        this.userService
            .create(createUserDto)
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    massage: 'Usuário criado com sucesso!',
                    data: {
                        name: createUserDto.name,
                        email: createUserDto.email
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({
                    statusCode: 400,
                    message: 'Usuário ja existe!'
                });
            });
    }

    @Get()
    async getAll(@Res() res: Response) {
        this.userService
            .getAll()
            .then((users) => {
                res.status(200).json({
                    statusCode: 200,
                    users
                });
            })
            .catch((err) => {
                console.log(err);

                res.status(400).json({
                    statusCode: 400,
                    message: 'Não foi possível encontrar os usuários'
                });
            });
    }
}
