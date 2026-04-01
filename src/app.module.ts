import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Дозволяє NestJS бачити змінні з файлу .env [cite: 184]
    ConfigModule.forRoot({ isGlobal: true }),

    // Підключення до PostgreSQL [cite: 185-194]
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'postgres',
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER || 'nestuser',
      password: process.env.POSTGRES_PASSWORD || 'nestpassword',
      database: process.env.POSTGRES_DB || 'nestdb',
      entities: [],
      synchronize: true, // Автоматично створює таблиці (тільки для розробки) [cite: 193, 207-208]
    }),

    // Підключення до Redis [cite: 239-250]
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: process.env.REDIS_HOST || 'redis',
            port: parseInt(process.env.REDIS_PORT || '6379', 10),
          },
        }),
        ttl: 60000,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}