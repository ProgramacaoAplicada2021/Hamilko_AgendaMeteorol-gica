import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator'
import { addDays } from 'date-fns'
import { IsAfterNow, MaxDate } from '@common/validators'

export class CreateReminderDto {
  @ApiProperty({ description: 'Nome do compromisso', example: 'Reunião de Negócios' })
  @IsString()
  @MaxLength(100)
  name: string

  @ApiProperty({
    description: 'Data de quando o compromisso ocorrerá',
    example: '2021-12-18 16:00',
    format: 'YYYY-MM-DD HH:mm'
  })
  @Type(() => Date)
  @IsDate()
  @IsAfterNow()
  @MaxDate(() => addDays(new Date(), 7))
  date: Date

  @ApiProperty({
    description: 'O local do compromisso ou de qual lugar você deseja verificar a temperatura',
    example: 'Curitiba, Paraná, Brasil',
    format: 'Cidade, Estado, País',
    default: 'O local inserido no cadastro'
  })
  @IsString()
  @IsOptional()
  location: string
}
