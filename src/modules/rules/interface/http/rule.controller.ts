import { Body, Controller, Post, Res } from '@nestjs/common';
import { RuleService } from '../../application/rule-case/rule-case.service';
import { RuleDto } from '../dto/rule.dto';
import { Response } from 'express';

@Controller('rule')
export class RuleController {
    constructor(private readonly ruleService: RuleService) {}

    @Post()
    public async save(@Body() ruleDto: RuleDto, @Res() res: Response) {
        this.ruleService
            .save(ruleDto)
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    message: 'Permissão criada com sucesso',
                    data: {
                        ruleDto
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
