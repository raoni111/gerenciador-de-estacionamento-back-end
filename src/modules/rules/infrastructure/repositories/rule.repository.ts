import { InjectRepository } from '@nestjs/typeorm';
import { Rule } from '../../domain/entities/rule.entity';
import { IRuleRepository } from '../../domain/repositories/rule.repositories.interface';
import { RuleORM } from '../typeorm/rules.orm.entity';
import { Repository } from 'typeorm';

export class RuleRepository implements IRuleRepository {
    constructor(
        @InjectRepository(RuleORM)
        public readonly ruleORM: Repository<RuleORM>
    ) {}

    async save(_rule: Rule): Promise<RuleORM> {
        const rule = this.ruleORM.create(_rule);

        const response = await this.ruleORM.save(rule);

        return response;
    }
}
