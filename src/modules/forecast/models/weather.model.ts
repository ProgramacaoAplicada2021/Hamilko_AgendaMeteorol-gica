import { ApiProperty } from '@nestjs/swagger'

export class Weather {
  @ApiProperty({ example: 24.5, description: 'Temperatura média do dia' })
  day: number

  @ApiProperty({ example: 22, description: 'Temperatura mínima do dia' })
  min: number

  @ApiProperty({ example: 27, description: 'Temperatura máxima do dia' })
  max: number
}
