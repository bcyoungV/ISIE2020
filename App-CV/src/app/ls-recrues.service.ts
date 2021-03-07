import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class LsRecruesService {
private LsRecrues: Personne[] = [];


  constructor() { }
// tslint:disable-next-line:typedef
getLsRecrues(){
  return this.LsRecrues;
}

// tslint:disable-next-line:typedef
addRecrue(p: Personne){
  this.LsRecrues.push(p);
}
// tslint:disable-next-line:typedef
verifyRecrue(personne: Personne){
  return this.LsRecrues.find(p => p.id === personne.id);
}







}
