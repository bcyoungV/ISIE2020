
import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Serveur } from '../model/serveur';
import {formatDate} from '@angular/common';
import { promise } from 'selenium-webdriver';
@Component({
  selector: 'app-ls-serveurs',
  templateUrl: './ls-serveurs.component.html',
  styleUrls: ['./ls-serveurs.component.css']
})
export class LsServeursComponent implements OnInit
{
  selectedStatus = '';
  // tslint:disable-next-line:align
  mypromise = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('Master ISIE');
    }, 3000);

  });
  listeserveur: Serveur[] = [
    new Serveur('bruno serveur', 'small', 'stable', new Date(2020, 12, 23)),
    new Serveur('production serveur', 'large', 'offline', new Date(2020, 11, 10)),
    new Serveur('developpement serveur', 'medium', 'critical', new Date(2020, 11, 23)),
    new Serveur('architecture serveur', 'large', 'stable', new Date(2021, 10, 31))
  ];



  constructor() { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
  setClass(s: Serveur)
  {
  return{
   'list-group-item-success': s.status === 'stable',
  'list-group-item-danger': s.status === 'critical',
  'list-group-item-warning': s.status === 'offline'
  };
  }
  // tslint:disable-next-line:typedef
  AddNewServeur(): any {this.listeserveur.push(new Serveur('new serveur', 'large', 'stable', new Date(2019, 23, 22)))}

}
