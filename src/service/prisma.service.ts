import { PrismaClient } from '@prisma/client'

export class PrismaService {
  private _client: PrismaClient

  get client(): PrismaClient {
    if (!this.client) {
      const prisma = new PrismaClient()
      this._client = prisma
    }
    return this._client
  }
}
