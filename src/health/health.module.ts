import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseModule } from '../DbConfig/DbModule.module';
import { userProviders } from '../DbConfig/user.providers';

@Module({
  imports: [TerminusModule, DatabaseModule],
  controllers: [HealthController],
  providers: [...userProviders],
})
export class HealthModule {}
