import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private readonly categoryRepo: Repository<Category>) {}

  async findAll() { return this.categoryRepo.find(); }
  async findOne(id: number) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }
  async create(data: Partial<Category>) {
    const category = this.categoryRepo.create(data);
    return this.categoryRepo.save(category);
  }
  async update(id: number, data: Partial<Category>) {
    const category = await this.findOne(id);
    Object.assign(category, data);
    return this.categoryRepo.save(category);
  }
  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryRepo.remove(category);
  }
}