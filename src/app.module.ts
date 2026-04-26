import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { Category } from './categories/category.entity';
import { Product } from './products/product.entity';

import { CreateTables1712610869345 } from './migrations/1712610869345-CreateTables';
import { AddIsActiveToProducts1775682852295 } from './migrations/1775682852295-AddIsActiveToProducts';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Category, Product],
      migrations: [CreateTables1712610869345, AddIsActiveToProducts1775682852295],
      synchronize: false,
      logging: true,
    }),
    CategoriesModule,
    ProductsModule,
  ],
})
export class AppModule {}