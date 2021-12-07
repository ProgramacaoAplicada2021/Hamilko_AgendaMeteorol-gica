import { Module } from '@nestjs/common'
import { ForecastService } from './services'

const exposedProviders = [ForecastService]

@Module({
  providers: [...exposedProviders],
  exports: [...exposedProviders]
})
export class ForecastModule {}
