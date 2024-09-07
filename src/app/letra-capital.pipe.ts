import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraCapital'
})
export class LetraCapitalPipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
