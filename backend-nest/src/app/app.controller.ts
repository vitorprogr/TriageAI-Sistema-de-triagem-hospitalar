import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  
  getHello(): string {
    const retorno = "retorno";
    return retorno;
  }

  @Get ('exemplo')

  exemplo(){
    return 'exemplo de rota'
  }
}
