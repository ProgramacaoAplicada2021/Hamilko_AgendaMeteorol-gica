import { Injectable } from '@nestjs/common'
import { IUseCase } from '@common/types'
import { Reminder } from '@modules/reminders/models'
import { ReminderRepository } from '@modules/reminders/repositories'

export interface GetAllRemindersParams {
  userId: string
}

@Injectable()
export class GetAllRemindersUseCase implements IUseCase<GetAllRemindersParams, Reminder[]> {
  constructor(private readonly reminderRepository: ReminderRepository) {}

  async execute({ userId }: GetAllRemindersParams): Promise<Reminder[]> {
    return this.reminderRepository.getAllRemindersFromUser(userId)
  }
}
