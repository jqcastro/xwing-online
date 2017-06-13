import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeSize'
})
export class RelativeSizePipe implements PipeTransform {

  transform(value: number, args: number): any {
    if (isNaN(value)) {
      throw new TypeError('relativeSize pipe expects a value of type number');
    }
    if (isNaN(args)) {
      throw new TypeError('relativeSize pipe expects an args of type number');
    }
    return value / args * 100;
  }

}
