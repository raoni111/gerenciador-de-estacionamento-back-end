import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { RuleModule } from './modules/rules/rule.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/modules/**/infrastructure/typeorm/*.entity{.ts,.js}'],
            synchronize: true
        }),
        UserModule,
        RuleModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
