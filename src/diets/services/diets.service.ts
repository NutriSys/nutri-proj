import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diet } from '../entities/diet.entity';
import { CreateDietDto, UpdateDietDto } from "../dto/diet";

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
  create(createDietDto: CreateDietDto) {
    const newDiet = this.dietsRepository.create(createDietDto);
    return this.dietsRepository.save(newDiet);
  }
  async update(id: number, updatedDietDto: UpdateDietDto) {
    const oldDiet = await this.dietsRepository.findOne(id);
    this.dietsRepository.merge(oldDiet, updatedDietDto);
    return this.dietsRepository.save(updatedDietDto);
  }

  async delete(id: number) {
    await this.dietsRepository.delete(id);
    return true;
  }
}
