import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { DietsService } from '../services/diets.service';
import { CreateDietDto, UpdateDietDto } from '../dto/diet';
@Controller('api/diets')
export class DietsController {
  constructor(private readonly dietsService: DietsService) {}

  @Get()
  getAll() {
    return this.dietsService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.dietsService.findOne(id);
  }

  @Post()
  create(@Body() createDietDto: CreateDietDto) {
    return this.dietsService.create(createDietDto);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() updateDietDto: UpdateDietDto) {
    return this.dietsService.update(id, updateDietDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.dietsService.delete(id);
  }
}
