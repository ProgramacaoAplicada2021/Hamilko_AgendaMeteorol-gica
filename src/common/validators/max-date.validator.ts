import { buildMessage, maxDate, ValidateBy, ValidationOptions } from 'class-validator'
import { format } from 'date-fns'

export function MaxDate(
  getDate: (object: any, value: any) => Date | undefined,
  validationOptions?: ValidationOptions
) {
  return ValidateBy(
    {
      name: 'maxDate',
      constraints: [getDate],
      validator: {
        validate(value: any, args) {
          const date = getDate(args?.object, value)
          if (!date) return true
          return maxDate(value, date)
        },
        defaultMessage: buildMessage(
          (eachPrefix, args) =>
            `${eachPrefix}$property is after ${format(
              getDate(args?.object, args?.value) as Date,
              'yyyy-MM-dd'
            )}`,
          validationOptions
        )
      }
    },
    validationOptions
  )
}
