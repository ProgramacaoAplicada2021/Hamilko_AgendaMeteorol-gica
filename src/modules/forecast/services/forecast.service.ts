import axios, { AxiosInstance } from 'axios'
import { isSameDay } from 'date-fns'
import { plainToClass } from 'class-transformer'
import { FORECAST_API_KEY } from '@common/constants'
import { ForecastApiResponse, WeatherApiResponse } from '../types'
import { Weather } from '../models'

export class ForecastService {
  axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      params: {
        appid: FORECAST_API_KEY
      }
    })
  }

  async getForecastByCity(city: string): Promise<ForecastApiResponse | null> {
    const { data: weatherData } = await this.axios.get<WeatherApiResponse>('/weather', {
      params: {
        q: city
      }
    })

    if (!weatherData) return null

    const { data } = await this.axios.get<ForecastApiResponse>('/onecall', {
      params: {
        exclude: 'minutely,hourly',
        ...weatherData.coord,
        units: 'metric',
        lang: 'pt-BR'
      }
    })
    return data
  }

  async getDayForecastByCity(city: string, date: Date): Promise<Weather | null> {
    const forecast = await this.getForecastByCity(city)

    if (!forecast) return null

    const dayForecast = forecast.daily.find(day => isSameDay(new Date(day.dt * 1000), date))

    return plainToClass(Weather, dayForecast?.temp || null)
  }
}
