import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { DomainErrorFilter } from '@common/filters'
import { ValidationPipe } from '@common/pipes'
import { AuthMiddleware } from '@common/middlewares'
import { TransformInterceptor } from '@common/interceptors'
import { PrismaModule } from '@modules/prisma'
import { UserModule } from '@modules/users'
import { GlobalConfigModule } from '@modules/global-configs'
import { ReminderModule } from '@modules/reminders'

@Module({
  imports: [GlobalConfigModule, PrismaModule, UserModule, ReminderModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: DomainErrorFilter
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*')
  }
}
