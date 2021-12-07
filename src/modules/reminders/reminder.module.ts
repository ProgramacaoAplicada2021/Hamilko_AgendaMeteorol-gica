import { Module } from '@nestjs/common'
import { UserModule } from '@modules/users'
import { ReminderRepository } from './repositories'
import { ReminderService } from './services'
import { UseCasesList } from './use-cases'
import { ReminderController } from './controllers'

@Module({
  imports: [UserModule],
  providers: [ReminderRepository, ReminderService, ...UseCasesList],
  controllers: [ReminderController]
})
export class ReminderModule {}
