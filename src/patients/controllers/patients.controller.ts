import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PatientsService } from '../services/patients.services';
import { CreatePatientDto } from '../dtos/patient';
@Controller('api/diets')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getAll() {
    return this.patientsService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.patientsService.findOne(id);
  }

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }
}
