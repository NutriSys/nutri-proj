import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DietsService } from './services/diets.service';
import { DietsController } from './controllers/diets.controller';
import { Diet } from './entities/diet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diet])],
  providers: [DietsService],
  controllers: [DietsController],
})
export class DietsModule {}
