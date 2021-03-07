import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
/*
  transform(value: Server[], filtredStatus: string): any {
    if (filtredStatus.length === 0) {
      return value;
    }
    else {
      const newListServers: Server[] = [];
      for (const serv of value) {
        if (serv.status === filtredStatus) {
          newListServers.push(serv);
        }
      }
      return newListServers;
    }
  }
*/
}
