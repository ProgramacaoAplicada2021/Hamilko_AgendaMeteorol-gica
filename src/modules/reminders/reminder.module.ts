import { Module } from '@nestjs/common'
import { UserModule } from '@modules/users'
import { ReminderRepository } from './repositories'
import { ReminderService } from './services'
import { UseCasesList } from './use-cases'

@Module({
  imports: [UserModule],
  providers: [ReminderRepository, ReminderService, ...UseCasesList]
})
export class ReminderModule {}
