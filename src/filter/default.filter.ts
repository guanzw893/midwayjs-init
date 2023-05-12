import { Catch } from '@midwayjs/core'

@Catch()
export class DefaultErrorFilter {
  async catch(err: Error, a: any) {
    return {
      success: false,
      message: err.message
    }
  }
}
