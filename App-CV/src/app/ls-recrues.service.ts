import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class LsRecruesService {
private LsRecrues: Personne[] = [];
  get: any;


  constructor() { }
// tslint:disable-next-line:typedef
getLsRecrues(){
  return this.LsRecrues;
}

// tslint:disable-next-line:typedef
addRecrue(p: Personne){
  this.LsRecrues.push(p);
}

verifyRecrue(personne: Personne){
  // tslint:disable-next-line:triple-equals
  return this.LsRecrues.find(p => p.id == personne.id);
}







}
