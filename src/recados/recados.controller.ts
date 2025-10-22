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

@Controller('recados')
export class RecadosController {
  // Encontrar todos os recados
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return `Essa rota retorna todos os recados.
    Limit=${limit}, Offset=${offset}`;
  }

  // Encontrar um recado
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retona o recado ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      body,
    };
  }

  @Delete()
  remove(@Param('id') id: string) {
    return `Essa rota apaga o recado ${id}`;
  }
}
