import { ApiProperty } from '@nestjs/swagger'
import { Entity } from '@common/classes'

export class User extends Entity {
  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  password: string

  @ApiProperty()
  location: string
}
