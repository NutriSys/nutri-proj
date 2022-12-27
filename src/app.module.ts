import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PatientsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
