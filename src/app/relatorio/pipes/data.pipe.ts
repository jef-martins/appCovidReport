import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'data'
})
export class RelatorioPipe implements PipeTransform {

  transform(value: string | undefined): string {
   if (!value) return ""
    return format(new Date(value), 'dd/MM/yyyy');
  }



}
