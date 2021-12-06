import { ApiProperty } from '@nestjs/swagger'
import { Entity } from '@common/classes'

export class User extends Entity {
  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  photoUrl?: string

  @ApiProperty()
  password: string
}
