import { Injectable } from '@nestjs/common'
import { BaseRepositoryPrisma } from '@common/classes'
import { Reminder } from '../models'
import { CreateReminderInput } from '../types'

@Injectable()
export class ReminderRepository extends BaseRepositoryPrisma<Reminder, 'reminder'> {
  constructor() {
    super(Reminder, 'reminder')
  }

  async create(data: CreateReminderInput): Promise<Reminder> {
    const reminder = await this.prismaService.reminder.create({
      data
    })
    return this.format(reminder)
  }
}
