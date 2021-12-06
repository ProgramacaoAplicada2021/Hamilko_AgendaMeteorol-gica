import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect()
    console.log('Database connection has been established.')
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async pingCheck(): Promise<boolean> {
    const res = await this.$executeRaw`SELECT 1`
    return !!res
  }
}
