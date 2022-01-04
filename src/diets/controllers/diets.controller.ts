import { Controller, Get, Param, Post,Body,Delete,Put } from '@nestjs/common';
import { DietsService } from './../services/diets.service';
@Controller('api/diets')
export class DietsController {

    constructor(
        private readonly dietsService: DietsService
        ) {}

    @Get()
    getAll(){
        return this.dietsService.findAll();
    }

    @Get('/:id')
    getOne(@Param('id') id: number){
        return this.dietsService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.dietsService.create(body);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() body: any){
        return this.dietsService.update(id, body);
    }

    @Delete('/:id')
    delete(@Param('id') id: number){
        return this.dietsService.delete(id);
    }

}
