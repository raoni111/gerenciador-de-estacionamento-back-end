import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleORM } from './infrastructure/typeorm/rules.orm.entity';
import { RuleRepository } from './infrastructure/repositories/rule.repository';
import { RuleService } from './application/rule-case/rule-case.service';
import { RuleController } from './interface/http/rule.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RuleORM])],
    controllers: [RuleController],
    providers: [RuleRepository, RuleService]
})
export class RuleModule {}
