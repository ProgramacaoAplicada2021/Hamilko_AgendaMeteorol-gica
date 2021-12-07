import { Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class ParseDatePipe implements PipeTransform {
  transform(value: any): Date {
    return new Date(value)
  }
}
