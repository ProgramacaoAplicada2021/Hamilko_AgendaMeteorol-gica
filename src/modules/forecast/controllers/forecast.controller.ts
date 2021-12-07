import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { ParseDatePipe } from '@common/pipes'
import { ForecastService } from '../services'
import { Weather } from '../models'

@Controller('forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  @Get(':date')
  @ApiResponse({
    type: Weather,
    status: HttpStatus.OK,
    description: 'Previsào do tempo para a cidade e data especificada'
  })
  async getForecast(
    @Param('date', ParseDatePipe) date: Date,
    @Query('city') city: string
  ): Promise<Weather | null> {
    return this.forecastService.getDayForecastByCity(city, date)
  }
}
