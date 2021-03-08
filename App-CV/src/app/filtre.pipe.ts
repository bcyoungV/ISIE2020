import { Pipe, PipeTransform } from '@angular/core';
import { Serveur } from './model/serveur';

@Pipe({
  name: 'filtre',
  pure: false
})
export class FiltrePipe implements PipeTransform {

  transform(value: Serveur[], filtredStatus: string): any {
    if (filtredStatus.length == 0) {
      return value;
    }
    else {
      let newlistserveur: Serveur[] = [];
      for (let serv of value)
      {
        if (serv['status'] == filtredStatus)
        {
         newlistserveur.push(serv);
        }
      }
      return newlistserveur;
    }
  }

}

