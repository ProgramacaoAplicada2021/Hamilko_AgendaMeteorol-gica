import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class SignUpDto {
  @ApiProperty({ example: 'John Doe', description: 'O nome do usuário' })
  @IsString()
  @MinLength(3)
  name: string

  @ApiProperty({
    example: 'example@example.com',
    description: 'Email do usuário que será usado como login'
  })
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty({
    example: 'teste123',
    description: 'A senha de login com um mínimo de 6 caracteres'
  })
  @IsString()
  @MinLength(6)
  password: string

  @ApiProperty({
    description: 'O local padrão que será usado, caso não seja informado quando criar o compromisso',
    example: 'Curitiba, Paraná, Brasil',
    format: 'Cidade, Estado, País'
  })
  @IsString()
  location: string
}
