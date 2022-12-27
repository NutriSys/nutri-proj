import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { PatientsService } from '../services/patients.services';
import { CreatePatientDto } from '../dto/patient';
@Controller('api/patients')
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

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.patientsService.delete(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() updatePatientDto: CreatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }
}
