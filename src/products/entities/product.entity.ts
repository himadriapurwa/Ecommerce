import { ProductCategory } from 'src/product_category/entities/product_category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  Description: string;

  @Column()
  Image: string;

  @Column()
  Quantity: number;

  @Column()
  category_id: number;
}
