import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

import { Product } from './products/entities/product.entity';
import { ProductCategoryModule } from './product_category/product_category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'ecommerce',
      entities: [User, Product, ProductCategoryModule],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    ProductCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
