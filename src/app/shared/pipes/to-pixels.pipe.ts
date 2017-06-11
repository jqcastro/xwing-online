import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPixels'
})
export class ToPixelsPipe implements PipeTransform {

  transform(value: any, args?: any): string {
     if (isNaN(value)) {
       throw new TypeError('toPixel pipe expects a number');
     }
    return `${value}px`;
  }

}
