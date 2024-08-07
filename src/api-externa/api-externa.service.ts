import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApiExternaService {


    private readonly apiUrl = 'https://restcountries.com/v2/lang/es/'; // URL de la API externa
    private readonly apiConversionUrl = 'https://api.apilayer.com/currency_data/';

  async getcountries(): Promise<any> {
    try { 
        
      const response = await axios.get(`${this.apiUrl}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener datos desde la API externa');
    }
  }

async getConversion(data: any): Promise<any>{ //en el data se  pueden incluir campos del body
  const headers = {
    'Content-Type': 'application/json', // Encabezado para indicar el tipo de contenido
    apikey: 'EfNwQKSZZSOD8bqakAaqeyI2rbUp3ZbN', // Encabezado de autorización si es necesario
  }

  const body = {
    "name": "alvaro",
    "email": "alvaro@gmail.com"
  }


try{
  
  const response = await axios.get(
    `${this.apiConversionUrl}convert${data}`,
     //body,
     {
      headers
     });
  return response.data;
}catch(error){
  throw new Error('Error al enviar datos a la API externa');
}

}

  }
