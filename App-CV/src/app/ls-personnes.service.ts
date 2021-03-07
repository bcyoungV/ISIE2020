import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class LsPersonnesService {

  private lsPersonnes: Personne[] = [
    new Personne(1, 'Bruno', 'Casaca', 25, 'Etudiant', ),
    new Personne(2, 'Breno', 'Casaca', 25, 'Etudiant', ),
    new Personne(3, 'Raquel', 'Jose', 25, 'Etudiant', ),
    new Personne(4, 'Alberto', 'Sozinho', 26, 'Economiste', )

  ];

  constructor() { }

  // tslint:disable-next-line:typedef
  getLsPersonnes(){
    return this.lsPersonnes;
  }

  // tslint:disable-next-line:typedef
  addPersonne() {
    this.lsPersonnes.push(new Personne(5, 'Antonio', 'Silva', 24, 'Economiste'), );

  }

}
