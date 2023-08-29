import { DataSource } from 'typeorm';
import { register } from '../User/entities/register.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'login_table',
        entities: [register],
      });

      return dataSource.initialize();
    },
  },
];
