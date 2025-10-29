import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRecadoDto {
  @IsString()
  @IsNotEmpty()
  readonly texto: string;

  deId: number;

  paraId: number;
}
