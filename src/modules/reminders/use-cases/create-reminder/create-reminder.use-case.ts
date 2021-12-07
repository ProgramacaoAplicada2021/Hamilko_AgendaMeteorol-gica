import { Injectable } from '@nestjs/common'
import { IUseCase } from '@common/types'
import { CreateReminderDto } from '@modules/reminders/dto'
import { Reminder } from '@modules/reminders/models'
import { ReminderRepository } from '@modules/reminders/repositories'
import { UserService } from '@modules/users/services'
import { ForecastService } from '@modules/forecast/services'

export interface CreateReminderParams {
  input: CreateReminderDto
  userId: string
}

@Injectable()
export class CreateReminderUseCase implements IUseCase<CreateReminderParams, Reminder> {
  constructor(
    private readonly reminderRepository: ReminderRepository,
    private readonly userService: UserService,
    private readonly forecastService: ForecastService
  ) {}

  async execute({ input, userId }: CreateReminderParams): Promise<Reminder> {
    let { location } = input

    if (!location) {
      const user = await this.userService.getUserById(userId)
      location = user!.location
    }

    const forecast = await this.forecastService.getDayForecastByCity(location, input.date)

    return this.reminderRepository.create({
      ...input,
      location,
      userId,
      temp: forecast?.day as number,
      maxTemp: forecast?.max as number,
      minTemp: forecast?.min as number
    })
  }
}
