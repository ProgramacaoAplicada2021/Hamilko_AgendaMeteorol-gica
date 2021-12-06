import { ApiProperty } from '@nestjs/swagger'
import { Entity } from '@common/classes'

export class Reminder extends Entity {
  @ApiProperty()
  name: string

  @ApiProperty()
  date: Date

  @ApiProperty()
  location: string

  @ApiProperty()
  userId: string
}
