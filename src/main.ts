import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { PORT } from '@common/constants'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  })
  const options = new DocumentBuilder().setTitle('Agenda weather').setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document)

  await app.listen(PORT, () => {
    Logger.log(`Server running at: http://localhost:${PORT}`)
  })
}

bootstrap()
