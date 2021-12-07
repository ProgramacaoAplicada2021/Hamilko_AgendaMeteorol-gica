import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { TOKEN_EXAMPLE } from '@common/constants'
import { User } from './user.model'

export class UserLogin {
  @ApiProperty({
    description: 'Token para ser inserido no authorization header',
    example: TOKEN_EXAMPLE
  })
  token: string

  @ApiProperty()
  @Type(() => User)
  user: User
}
