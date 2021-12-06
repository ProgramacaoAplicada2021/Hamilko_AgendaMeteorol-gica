import { Module } from '@nestjs/common'
import { AuthService, UserService } from './services'
import { UserRepository } from './repositories'
import { AuthController, UserController } from './controllers'
import { UseCasesList } from './use-cases'

@Module({
  providers: [UserRepository, AuthService, UserService, ...UseCasesList],
  controllers: [UserController, AuthController],
  exports: [AuthService, UserService]
})
export class UserModule {}
