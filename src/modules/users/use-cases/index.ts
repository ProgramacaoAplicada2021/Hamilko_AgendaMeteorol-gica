import { getCqrsHandlers } from '@common/utils/cqrs.util'

export * from './get-user-by-id'
export * from './login'
export * from './sign-up'

export const UseCasesList = getCqrsHandlers(exports, 'useCase')
