import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiExternaService } from './api-externa/api-externa.service';
import { ApiExternaModule } from './api-externa/api-externa.module';

@Module({
  imports: [ApiExternaModule],
  controllers: [AppController],
  providers: [AppService, ApiExternaService],
})
export class AppModule {}
