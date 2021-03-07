import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  onePersonne!: Personne;
  @Output() personneToLs = new EventEmitter<Personne>();

  constructor() { }

  ngOnInit(): void {
  }


sendPersonne(){
  this.personneToLs.emit(this.onePersonne);
}







}
