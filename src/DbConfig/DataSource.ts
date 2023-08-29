import { DataSource } from 'typeorm';
import { register } from '../User/entities/register.entity';
import 'dotenv/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [register],
      });

      return dataSource.initialize();
    },
  },
];
