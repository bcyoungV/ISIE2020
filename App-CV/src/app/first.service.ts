import { SecondService } from './second.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondservice: SecondService) { }

  logger(msg: string){
    console.log('Bonjour !');
    console.log(msg);

    this.secondservice.showMsg();
  }
}
