import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { AUTHENTICATION_REQUIRED } from '@common/constants'
import { AuthUser, RequiresUserAuth } from '@common/decorators'
import { JUser } from '@common/types'
import { Reminder } from '../models'
import { ReminderService } from '../services'
import { CreateReminderDto } from '../dto'

@Controller('reminders')
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Post()
  @RequiresUserAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: Reminder,
    description: 'Create reminder',
    ...AUTHENTICATION_REQUIRED
  })
  async createReminder(
    @Body() input: CreateReminderDto,
    @AuthUser() user: JUser
  ): Promise<Reminder> {
    return this.reminderService.createReminder(input, user.id)
  }
}
