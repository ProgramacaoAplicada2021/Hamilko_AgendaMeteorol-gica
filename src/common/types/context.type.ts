import { Request as ExpressRequest } from 'express'

export enum Role {
  USER = 'USER'
}

export interface JUser {
  iss: string
  email: string
  id: string
  /**
   * User Id
   */
  sub: string
  iat: number
  exp: number
  role: Role
}

export type TokenStatus = 'valid' | 'invalid' | 'expired' | 'missing'

export interface Request extends ExpressRequest {
  user?: JUser | null
  tokenStatus: TokenStatus
  i18nLang?: string
}
