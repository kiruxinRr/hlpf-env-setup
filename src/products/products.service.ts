import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepo: Repository<Product>) {}

  async findAll() { return this.productRepo.find({ relations: ['category'] }); }
  async findOne(id: number) {
    const product = await this.productRepo.findOne({ where: { id }, relations: ['category'] });
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }
  async create(data: any) {
    const product = this.productRepo.create({
      ...data,
      category: data.categoryId ? { id: data.categoryId } : null,
    });
    return this.productRepo.save(product);
  }
  async update(id: number, data: any) {
    const product = await this.findOne(id);
    Object.assign(product, {
      ...data,
      category: data.categoryId ? { id: data.categoryId } : product.category,
    });
    return this.productRepo.save(product);
  }
  async remove(id: number) {
    const product = await this.findOne(id);
    await this.productRepo.remove(product);
  }
}