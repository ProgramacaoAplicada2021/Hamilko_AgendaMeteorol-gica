import { ApiProperty } from '@nestjs/swagger'

export class Entity {
  @ApiProperty({ example: '5e8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f' })
  id: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
