import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }
  // tslint:disable-next-line:typedef
  showMsg(){
    console.log('je suis le seconde service!');
  }
}
