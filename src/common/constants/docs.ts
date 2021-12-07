import { HeadersObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface'

export const AUTHENTICATION_REQUIRED: { headers: HeadersObject } = {
  headers: {
    authorization: {
      description: 'Bearer (mistura de números e letras retornado no login)',
      required: true
    }
  }
}

export const TOKEN_EXAMPLE =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZThmOGY4Zi04ZjhmLThmOGYtOGY4Zi04ZjhmOGY4ZjhmOGYiLCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImlkIjoiNWU4ZjhmOGYtOGY4Zi04ZjhmLThmOGYtOGY4ZjhmOGY4ZjhmIiwicm9sZSI6IlVTRVIiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20ifQ.DdCbi3RAgC91z4A2qXVant33FrIsr3O1XmPogoznqa4'
