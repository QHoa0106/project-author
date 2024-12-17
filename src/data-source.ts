import { DataSource } from 'typeorm';
import { AccessToken, RefreshToken, User } from './users/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Quanghoa01062001',
  database: 'auth_db',
  entities: [User, AccessToken, RefreshToken],
  migrations: [__dirname + '/migrations/*.ts'],
  logging: true,
  synchronize: true,
});
