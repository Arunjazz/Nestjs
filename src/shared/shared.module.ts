import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { register } from '../User/Entities/register.entity';
import { configModuleOptions } from './configs/module-options';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow<string>('mysql.host'),
        port: configService.getOrThrow<number>('mysql.port'),
        username: configService.getOrThrow<string>('mysql.username'),
        password: configService.getOrThrow<string>('mysql.password'),
        database: configService.getOrThrow<string>('mysql.database'),
        entities: [register],
      }),
    }),
  ],
  exports: [ConfigModule],
})
export class SharedModule {}
