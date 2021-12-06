import { Provider } from '@nestjs/common'

export function isFunction(value: any): value is Function {
  return typeof value === 'function'
}

export function transformExportsInList(exportedValues: any, searchStr = 'useCase'): Provider[] {
  return Object.values(exportedValues).filter(
    handler => isFunction(handler) && new RegExp(searchStr, 'i').test(handler.name)
  ) as Provider[]
}
