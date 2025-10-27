import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateRecadoDto {
  readonly texto?: string;

  readonly de?: string;

  readonly para?: string;
  @IsBoolean()
  @IsOptional()
  readonly lido?: boolean;
}
