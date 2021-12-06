import { Controller, Get, HttpStatus } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { AuthUser, RequiresUserAuth } from '@common/decorators'
import { JUser } from '@common/types'
import { AUTHENTICATION_REQUIRED } from '@common/constants'
import { UserService } from '../services'
import { User } from '../models'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @RequiresUserAuth()
  @ApiResponse({
    type: User,
    status: HttpStatus.OK,
    description: 'Retornar o usuário de acordo com o authorization header',
    ...AUTHENTICATION_REQUIRED
  })
  me(@AuthUser() user: JUser) {
    return this.userService.getUserById(user.id)
  }
}
