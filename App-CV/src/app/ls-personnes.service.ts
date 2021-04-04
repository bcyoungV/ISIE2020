import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class LsPersonnesService {

  private lsPersonnes: Personne[] = [
    new Personne(1, 'Bruno', 'Casaca', 25, 'Etudiant', 'ID-PHOTO-ConvertImage.jpg'),
    new Personne(2, 'Jesus', 'Isabel', 28, 'Stomotologue', 'WhatsApp Image 2020-08-14 at 1.55.10 PM.jpeg'),
    new Personne(3, 'Raquel', 'Jose', 25, 'Avocate', '_Kelly_ 20170720_083925.jpg'),
    new Personne(4, 'Silvia', 'Mussungo', 28, 'Etudiante', 'IMG-20180327-WA0000.jpg'),
    new Personne(5, 'Alberto', 'Sozinho', 26, 'Economiste', 'Sozinnho.jpg')

  ];

  constructor() { }

  getLsPersonnes(){
    return this.lsPersonnes;
  }

  addPersonne() {
    this.lsPersonnes.push(new Personne(6, 'Antonio', 'Silva', 24, 'Economiste', 'Tonny.jpeg'), );

  }

  getPersonneById(id){
    return this.lsPersonnes.find(p => p.id === id);
  }
}
