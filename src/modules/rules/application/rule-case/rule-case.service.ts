import { Injectable } from '@nestjs/common';
import { RuleRepository } from '../../infrastructure/repositories/rule.repository';
import { Rule } from '../../domain/entities/rule.entity';

@Injectable()
export class RuleService {
    constructor(private readonly ruleRepo: RuleRepository) {}

    public async save(input: Rule) {
        const rule = new Rule(input.name);

        return this.ruleRepo.save(rule);
    }
}
