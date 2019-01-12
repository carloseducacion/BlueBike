import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalize'
})
/* Pipe personal para capitalizar texto */
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const words = value.split(' ');

      value = words.map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');
    }
    return value;
  }

}


