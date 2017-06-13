import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUnit'
})
export class ToUnitPipe implements PipeTransform {

  transform(value: number, args?: string): string {
    let unit = '';
    if (isNaN(value)) {
      throw new TypeError('toUnit pipe expects a number');
    }
    if (args) {
      unit = args;
    }
    return `${value}${unit}`;
  }

}
