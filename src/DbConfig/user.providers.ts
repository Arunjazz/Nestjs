import { DataSource } from 'typeorm';
import { register } from '../User/entities/register.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(register),
    inject: ['DATA_SOURCE'],
  },
];
