import { Module } from '@nestjs/common'
import { UserModule } from '@modules/users'
import { ForecastModule } from '@modules/forecast'
import { ReminderRepository } from './repositories'
import { ReminderService } from './services'
import { UseCasesList } from './use-cases'
import { ReminderController } from './controllers'

@Module({
  imports: [UserModule, ForecastModule],
  providers: [ReminderRepository, ReminderService, ...UseCasesList],
  controllers: [ReminderController]
})
export class ReminderModule {}
