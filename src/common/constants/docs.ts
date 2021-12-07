import { HeadersObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'

export const AUTHENTICATION_REQUIRED: { headers: HeadersObject } = {
  headers: {
    authorization: {
      description: 'Bearer (mistura de números e letras retornado no login)',
      required: true
    }
  }
}
