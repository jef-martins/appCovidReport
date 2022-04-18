import { format } from 'date-fns';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(value: number | string | undefined): string {
   if (!value) return ""
    return value.toLocaleString()
  }

}
