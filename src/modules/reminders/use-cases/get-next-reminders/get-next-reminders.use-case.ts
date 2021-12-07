import { Injectable } from '@nestjs/common'
import { IUseCase } from '@common/types'
import { Reminder } from '@modules/reminders/models'
import { ReminderRepository } from '@modules/reminders/repositories'

export interface GetNextRemindersParams {
  userId: string
}

@Injectable()
export class GetNextRemindersUseCase implements IUseCase<GetNextRemindersParams, Reminder[]> {
  constructor(private readonly reminderRepository: ReminderRepository) {}

  async execute({ userId }: GetNextRemindersParams): Promise<Reminder[]> {
    return this.reminderRepository.getNextRemindersFromUser(userId)
  }
}
