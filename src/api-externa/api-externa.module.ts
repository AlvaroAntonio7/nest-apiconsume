import { Module } from '@nestjs/common';
import { ApiExternaService } from './api-externa.service';
import { ApiExternaController } from './api-externa.controller';


@Module({
  providers: [ApiExternaService],
  controllers: [ApiExternaController]
})
export class ApiExternaModule {}
