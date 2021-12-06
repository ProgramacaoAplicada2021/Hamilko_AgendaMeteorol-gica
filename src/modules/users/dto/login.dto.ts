import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class LoginDto {
  @ApiProperty({
    example: 'example@example.com',
    description: 'O email inserido no cadastro'
  })
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string

  @ApiProperty({
    example: 'teste123',
    description: 'A senha inserida no cadastro'
  })
  @IsString()
  password: string
}
