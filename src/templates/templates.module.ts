import { Module } from '@nestjs/common';
import { TemplatesService } from './services/templates.service';
import { TemplatesController } from './controllers/templates.controller';

@Module({
  controllers: [TemplatesController],
  providers: [TemplatesService],
})
export class TemplatesModule {}
