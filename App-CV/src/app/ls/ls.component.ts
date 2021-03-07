import { LsPersonnesService } from './../ls-personnes.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-ls',
  templateUrl: './ls.component.html',
  styleUrls: ['./ls.component.css']
})
export class LsComponent implements OnInit {
  @Input() PersonnesLs: Personne[] = [];
  @Output() personneToCV = new EventEmitter<Personne>();

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private LsPersonnesService: LsPersonnesService) { }

  ngOnInit(): void {
    this.PersonnesLs = this.LsPersonnesService.getLsPersonnes();
  }


  sendToCV(p: Personne)
    {
      this.personneToCV.emit(p);
    }

    showLs(){
      console.log(this.PersonnesLs);
    }
}
