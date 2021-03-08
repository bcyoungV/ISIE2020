import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length >= 15)
    {
      return value.slice(0, 15) + '...';

    }
    return value;
  }

}
