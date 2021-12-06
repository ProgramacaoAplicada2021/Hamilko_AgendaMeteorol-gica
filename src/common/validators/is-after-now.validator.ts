import { ValidationOptions, isDate, ValidateBy } from 'class-validator'

export function isAfterNow(value: any) {
  if (!isDate(value)) return false
  return new Date(value).getTime() > Date.now()
}

export function IsAfterNow(validationOptions?: ValidationOptions) {
  return ValidateBy(
    {
      name: 'isAfterNow',
      validator: {
        validate(value: any) {
          return isAfterNow(value)
        }
      }
    },
    validationOptions
  )
}
