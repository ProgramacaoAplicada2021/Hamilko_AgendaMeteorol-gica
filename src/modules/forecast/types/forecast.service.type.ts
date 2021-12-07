import { Weather } from '../models'

export interface WeatherApiResponse {
  coord: {
    lon: number
    lat: number
  }
}

export interface ForecastApiResponse {
  daily: {
    dt: number
    temp: Weather
  }[]
}
