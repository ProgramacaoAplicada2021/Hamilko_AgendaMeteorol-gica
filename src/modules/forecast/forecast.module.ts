import { Module } from '@nestjs/common'
import { ForecastController } from './controllers'
import { ForecastService } from './services'

const exposedProviders = [ForecastService]

@Module({
  providers: [...exposedProviders],
  exports: [...exposedProviders],
  controllers: [ForecastController]
})
export class ForecastModule {}
