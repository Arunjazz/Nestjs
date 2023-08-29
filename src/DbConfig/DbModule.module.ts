import { Module } from '@nestjs/common';
import { databaseProviders } from './DataSource';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
