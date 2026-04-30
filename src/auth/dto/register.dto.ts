import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';

export class RegisterDto {
  @IsEmail({}, { message: 'Некоректний формат email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Пароль має бути не менше 6 символів' })
  password: string;

  @IsOptional()
  @IsString()
  name?: string;
}