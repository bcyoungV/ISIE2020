import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor() { }
  showMsg(){
    console.log('je suis le seconde service!');
  }
}
