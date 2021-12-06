import { Module } from '@nestjs/common'
import { ReminderRepository } from './repositories'

@Module({
  providers: [ReminderRepository]
})
export class ReminderModule {}
