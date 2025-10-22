import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  // Encontrar todos os recados
  @Get()
  findAll() {
    return 'Essa rota retorna todos os recados';
  }

  // Encontrar um recado
  @Get('id')
  findOnde() {
    return 'Essa rota retona um recado';
  }
}
