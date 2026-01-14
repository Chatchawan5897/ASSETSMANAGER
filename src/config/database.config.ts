import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT, 10) || 5432,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME || 'chatchawan',
  password: process.env.DB_PASSWORD || 'Abc12345++',
  database: process.env.DB_DATABASE || 'ditto_assets_db',
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV === 'development', // true ใน dev / false ใน prod
  logging: process.env.NODE_ENV === 'development',
  dropSchema: false,
};
