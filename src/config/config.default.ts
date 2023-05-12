import { MidwayConfig } from '@midwayjs/core'

export default (): MidwayConfig => {
  return {
    keys: 'e1862324-1b31-422e-b45c-bba1bd260e49',
    koa: {
      port: 7001
    },
    swagger: {
      title: 'video-api',
      description: 'This is a swagger-ui for video project'
    }
  }
}
