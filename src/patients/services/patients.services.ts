import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../entities/patient.entity';
import { CreatePatientDto } from '../dtos/patient';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient) private dietsRepository: Repository<Patient>,
  ) {}

  findAll() {
    return this.dietsRepository.find();
  }
  findOne(id: number) {
    return this.dietsRepository.findOne(id);
  }
  create(CreatePatientDto: CreatePatientDto) {
    const newDiet = this.dietsRepository.create(CreatePatientDto);
    return this.dietsRepository.save(newDiet);
  }

  async delete(id: number) {
    await this.dietsRepository.delete(id);
    return true;
  }
}
