import {
  IsEmail,
  IsNotEmpty,
  IsPositive,
  isPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePessoaDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  nome: string;

  @isPositive
  deId: number;

  @IsPositive
  paraid: number;
}
