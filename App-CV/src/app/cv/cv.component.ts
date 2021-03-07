import { Component, OnInit } from '@angular/core';
import { Personne} from '../model/personne';
import { LsPersonnesService } from '../ls-personnes.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  lsPersonnes: Personne[] = [];
  personneSelected!: Personne;

  constructor(private personneService: LsPersonnesService) { }

  ngOnInit(): void {
    this.lsPersonnes = this.personneService.getLsPersonnes();
  }


  RecebePersonne(p: Personne){
    this.personneSelected = p;
  }

  addNewPersonne(){
    this.personneService.addPersonne();
  }



}
