import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from '../entities/patient.entity';
import { CreatePatientDto } from '../dto/patient';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient) private patientRepo: Repository<Patient>,
  ) {}

  findAll() {
    return this.patientRepo.find();
  }
  findOne(id: number) {
    return this.patientRepo.findOne(id);
  }
  create(CreatePatientDto: CreatePatientDto) {
    const newPatient = this.patientRepo.create(CreatePatientDto);
    return this.patientRepo.save(newPatient);
  }

  async delete(id: number) {
    await this.patientRepo.delete(id);
    return true;
  }
}
