import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiExternaService } from './api-externa.service';



@Controller('data')
export class ApiExternaController {
  constructor(private readonly apiService: ApiExternaService) {}

  @Get()
  async getDataFromApi(): Promise<any> {
    try {
      const data = await this.apiService.getcountries();
      return { success: true, data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post() //http://localhost:3000/data?to=BOB&from=USD&amount=6
  async getConversionCurrency(@Query("from") fromConversion:string, @Query("to") toConversion: string, @Query("amount") amountConversion:string ): Promise<any>{
    try {
      const data = await this.apiService.getConversion(`?from=${fromConversion}&to=${toConversion}&amount=${amountConversion}`);
      return { success: true, data };
      } catch (error) {
        return { success: false, message: error.message };
      }

  }
}