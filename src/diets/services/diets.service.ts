import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diet } from '../entities/diet.entity';

@Injectable()
export class DietsService {
  constructor(
    @InjectRepository(Diet) private dietsRepository: Repository<Diet>,
  ) {}

  findAll() {
    return this.dietsRepository.find();
  }
  findOne(id: number) {
    return this.dietsRepository.findOne(id);
  }
  create(diet: any) {
    const newDiet = this.dietsRepository.create(diet);
    return this.dietsRepository.save(newDiet);
  }
  async update(id: number, diet: any) {
    const dieta = await this.dietsRepository.findOne(id);
    this.dietsRepository.merge(dieta, diet);
    return this.dietsRepository.save(dieta);
  }

  async delete(id: number) {
    await this.dietsRepository.delete(id);
    return true;
  }
}
