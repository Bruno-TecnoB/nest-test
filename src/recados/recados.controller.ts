import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { TimingConnectionInterceptor } from 'src/common/interceptors/timing-connection-interceptor';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}
  // Encontrar todos os recados
  @UseInterceptors(TimingConnectionInterceptor)
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.recadosService.findAll(paginationDto);
  }

  // Encontrar um recado
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.recadosService.findOne(id);
  }

  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecadoDto: UpdateRecadoDto,
  ) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete()
  remove(@Param('id') id: number) {
    return this.recadosService.remove(id);
  }
}
