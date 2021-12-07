import { Injectable } from '@nestjs/common'
import { CreateReminderDto } from '../dto'
import { CreateReminderUseCase, GetAllRemindersUseCase } from '../use-cases'
import { Reminder } from '../models'

@Injectable()
export class ReminderService {
  constructor(
    private readonly createReminderUseCase: CreateReminderUseCase,
    private readonly getAllRemindersUseCase: GetAllRemindersUseCase
  ) {}

  async createReminder(input: CreateReminderDto, userId: string): Promise<Reminder> {
    return this.createReminderUseCase.execute({ input, userId })
  }

  async getAllReminders(userId: string): Promise<Reminder[]> {
    return this.getAllRemindersUseCase.execute({ userId })
  }
}
