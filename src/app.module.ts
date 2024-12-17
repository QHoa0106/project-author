import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessToken, RefreshToken, User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Quanghoa01062001',
      database: 'auth_db',
      entities: [User, AccessToken, RefreshToken],
      synchronize: false,
      migrations: [__dirname + '/migrations/*.ts'],
    }),
    AuthModule,
  ],
})
export class AppModule {}
