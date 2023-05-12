import { Controller, Get, Inject, Query } from '@midwayjs/core'
import { Context } from '@midwayjs/koa'
import { PrismaClient } from '@prisma/client'

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context

  @Inject('prisma')
  prisma: PrismaClient

  @Get('/get_user')
  async getUser(@Query('uid') uid: number) {
    return await this.prisma.user.findUniqueOrThrow({ where: { id: uid } })
  }
}
