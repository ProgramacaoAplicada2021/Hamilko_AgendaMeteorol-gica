import { Controller, Get, HttpStatus } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { AuthUser, RequiresUserAuth } from '@common/decorators'
import { JUser } from '@common/types'
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
    description: 'Get current user according to authorization header'
  })
  me(@AuthUser() user: JUser) {
    return this.userService.getUserById(user.id)
  }
}
