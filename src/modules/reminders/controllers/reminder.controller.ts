import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common'
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
    description: 'Criar um compromisso',
    ...AUTHENTICATION_REQUIRED
  })
  async createReminder(
    @Body() input: CreateReminderDto,
    @AuthUser() user: JUser
  ): Promise<Reminder> {
    return this.reminderService.createReminder(input, user.id)
  }

  @Get()
  @RequiresUserAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [Reminder],
    description: 'Listar todos os compromissos do usuário',
    ...AUTHENTICATION_REQUIRED
  })
  async getReminders(@AuthUser() user: JUser): Promise<Reminder[]> {
    return this.reminderService.getAllReminders(user.id)
  }

  @Get('next')
  @RequiresUserAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    type: [Reminder],
    description: 'Listar todos os próximos compromissos do usuário',
    ...AUTHENTICATION_REQUIRED
  })
  async getNextReminders(@AuthUser() user: JUser): Promise<Reminder[]> {
    return this.reminderService.getNextReminders(user.id)
  }
}
