import { Module } from '@nestjs/common';
import { DietsModule } from './diets/diets.module';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemplatesModule } from './templates/templates.module';
import { dataSourceOptions } from 'db/data-source';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    DietsModule,
    PatientsModule,
    TemplatesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
