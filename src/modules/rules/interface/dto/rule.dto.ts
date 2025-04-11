import { IsNotEmpty } from 'class-validator';

export class RuleDto {
    @IsNotEmpty()
    name: string;
}
