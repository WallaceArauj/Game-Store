import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';


@Entity ({name: 'tb_products'})
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({length: 75, nullable: false })
  title: string;

  @IsNotEmpty()
  @Column({length: 700, nullable: false})
  description: string;

  @IsNotEmpty()
  @Column('decimal',{precision: 5, scale: 2, nullable: false})
  price: number;

  @ManyToOne(() => Category, (category) => category.product,{
    onDelete: 'CASCADE',
  })
  category: Category;
}
