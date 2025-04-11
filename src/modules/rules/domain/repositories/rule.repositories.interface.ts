import { RuleORM } from '../../infrastructure/typeorm/rules.orm.entity';
import { Rule } from '../entities/rule.entity';

export interface IRuleRepository {
    save(rule: Rule): Promise<RuleORM>;
}
