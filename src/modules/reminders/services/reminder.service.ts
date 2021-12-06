import { Injectable } from '@nestjs/common'
import { CreateReminderDto } from '../dto'
import { CreateReminderUseCase } from '../use-cases'
import { Reminder } from '../models'

@Injectable()
export class ReminderService {
  constructor(private readonly createReminderUseCase: CreateReminderUseCase) {}

  async createReminder(input: CreateReminderDto, userId: string): Promise<Reminder> {
    return this.createReminderUseCase.execute({ input, userId })
  }
}
