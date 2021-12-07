import { Injectable } from '@nestjs/common'
import { CreateReminderDto } from '../dto'
import { CreateReminderUseCase, GetAllRemindersUseCase, GetNextRemindersUseCase } from '../use-cases'
import { Reminder } from '../models'

@Injectable()
export class ReminderService {
  constructor(
    private readonly createReminderUseCase: CreateReminderUseCase,
    private readonly getAllRemindersUseCase: GetAllRemindersUseCase,
    private readonly getNextRemindersUseCase: GetNextRemindersUseCase
  ) {}

  async createReminder(input: CreateReminderDto, userId: string): Promise<Reminder> {
    return this.createReminderUseCase.execute({ input, userId })
  }

  async getAllReminders(userId: string): Promise<Reminder[]> {
    return this.getAllRemindersUseCase.execute({ userId })
  }

  async getNextReminders(userId: string): Promise<Reminder[]> {
    return this.getNextRemindersUseCase.execute({ userId })
  }
}
