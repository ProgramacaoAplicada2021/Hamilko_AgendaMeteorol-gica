import { ApiProperty } from '@nestjs/swagger'
import { Entity } from '@common/classes'

export class User extends Entity {
  @ApiProperty({ example: 'John Doe' })
  name: string

  @ApiProperty({ example: 'example@example.com' })
  email: string

  @ApiProperty({ example: 'hashed_password' })
  password: string

  @ApiProperty({ example: 'Curitiba, Paraná, Brasil' })
  location: string
}
