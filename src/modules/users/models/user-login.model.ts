import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { User } from './user.model'

export class UserLogin {
  @ApiProperty({ description: 'Token para ser inserido no authorization header' })
  token: string

  @ApiProperty()
  @Type(() => User)
  user: User
}
