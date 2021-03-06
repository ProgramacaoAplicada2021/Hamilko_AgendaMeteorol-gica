import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { LoginDto, SignUpDto } from '../dto'
import { UserLogin } from '../models'
import { UserService } from '../services'

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @ApiResponse({
    type: UserLogin,
    status: HttpStatus.CREATED,
    description: 'Rota para fazer o cadastro de um usuário'
  })
  signUp(@Body() input: SignUpDto) {
    return this.userService.signUp(input)
  }

  @Post('login')
  @ApiResponse({ type: UserLogin, status: HttpStatus.OK, description: 'Rota para fazer o login' })
  @HttpCode(HttpStatus.OK)
  login(@Body() input: LoginDto) {
    return this.userService.login(input)
  }
}
