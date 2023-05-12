import { IMiddleware } from '@midwayjs/core'
import { Middleware } from '@midwayjs/decorator'
import { Context, NextFunction } from '@midwayjs/koa'

@Middleware()
export class ResplyMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const result = await next()
      return {
        success: true,
        message: '成功',
        data: result
      }
    }
  }
}
