import { Injectable } from '@nestjs/common'
import { LoginDto, SignUpDto } from '../dto'
import { User, UserLogin } from '../models'
import { GetUserByIdUseCase, LoginUseCase, SignUpUseCase } from '../use-cases'

@Injectable()
export class UserService {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly loginUseCase: LoginUseCase,
    private readonly signUpUseCase: SignUpUseCase
  ) {}

  signUp(input: SignUpDto): Promise<UserLogin> {
    return this.signUpUseCase.execute(input)
  }

  login(input: LoginDto): Promise<UserLogin> {
    return this.loginUseCase.execute(input)
  }

  getUserById(userId: string): Promise<User | null> {
    return this.getUserByIdUseCase.execute({ userId })
  }
}
