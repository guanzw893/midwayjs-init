import { App, Configuration } from '@midwayjs/decorator'
import * as info from '@midwayjs/info'
import * as koa from '@midwayjs/koa'
import * as swagger from '@midwayjs/swagger'
import * as validate from '@midwayjs/validate'
import { PrismaClient } from '@prisma/client'
import { join } from 'path'

import { DefaultErrorFilter } from './filter/default.filter'
import { NotFoundFilter } from './filter/notfound.filter'
import { ResplyMiddleware } from './middleware/resply.middleware'

@Configuration({
  imports: [
    koa,
    validate,
    swagger,
    {
      component: info,
      enabledEnvironment: ['local']
    }
  ],
  importConfigs: [join(__dirname, './config')]
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application

  async onReady() {
    this.app.useMiddleware([ResplyMiddleware])
    this.app.useFilter([NotFoundFilter, DefaultErrorFilter])
    this.app
      .getApplicationContext()
      .registerObject('prisma', new PrismaClient())
  }
}
