/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRecadoDto {
  @IsString()
  @IsNotEmpty()
  readonly texto?: string;

  @IsString()
  @IsNotEmpty()
  readonly de?: string;

  @IsString()
  @IsNotEmpty()
  readonly para?: string;
}
