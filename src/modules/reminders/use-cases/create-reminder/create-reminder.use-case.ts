import { Injectable } from '@nestjs/common'
import { IUseCase } from '@common/types'
import { CreateReminderDto } from '@modules/reminders/dto'
import { Reminder } from '@modules/reminders/models'
import { ReminderRepository } from '@modules/reminders/repositories'
import { UserService } from '@modules/users/services'

export interface CreateReminderParams {
  input: CreateReminderDto
  userId: string
}

@Injectable()
export class CreateReminderUseCase implements IUseCase<CreateReminderParams, Reminder> {
  constructor(
    private readonly reminderRepository: ReminderRepository,
    private readonly userService: UserService
  ) {}

  async execute({ input, userId }: CreateReminderParams): Promise<Reminder> {
    let { location } = input

    if (!location) {
      const user = await this.userService.getUserById(userId)
      location = user!.location
    }

    return this.reminderRepository.create({
      ...input,
      location,
      userId
    })
  }
}
