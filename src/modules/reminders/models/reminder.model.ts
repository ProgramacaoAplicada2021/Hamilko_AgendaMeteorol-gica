import { ApiProperty } from '@nestjs/swagger'
import { Entity } from '@common/classes'

export class Reminder extends Entity {
  @ApiProperty({ example: 'Reunião de Negócios' })
  name: string

  @ApiProperty({ example: '2021-12-18T00:00:00.000Z' })
  date: Date

  @ApiProperty({ example: 'Curitiba, Paraná, Brasil' })
  location: string

  @ApiProperty({ example: '5e8f8f8f-8f8f-8f8f-8f8f-8f8f8f8f8f8f' })
  userId: string

  @ApiProperty({ example: 24.5, description: 'Temperatura média do dia' })
  temp: number

  @ApiProperty({ example: 22, description: 'Temperatura mínima do dia' })
  minTemp: number

  @ApiProperty({ example: 27, description: 'Temperatura máxima do dia' })
  maxTemp: number
}
