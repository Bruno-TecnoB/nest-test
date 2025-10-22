/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}
  // Encontrar todos os recados
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    // return `Essa rota retorna todos os recados.
    //Limit=${limit}, Offset=${offset}`;
    return this.recadosService.findAll();
  }

  // Encontrar um recado
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.recadosService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    this.recadosService.update(id, body);
  }

  @Delete()
  remove(@Param('id') id: string) {
    this.recadosService.remove(id);
  }
}
