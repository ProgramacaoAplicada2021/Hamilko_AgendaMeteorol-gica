import { Module } from '@nestjs/common'
import { UserModule } from '@modules/users'
import { ReminderRepository } from './repositories'

@Module({
  imports: [UserModule],
  providers: [ReminderRepository]
})
export class ReminderModule {}
