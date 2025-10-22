import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Define rota
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Cria endpoint com método Get e gera subrota
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('ex')
  exemplo(): string {
    return this.appService.solucionaExemplo();
  }
}
