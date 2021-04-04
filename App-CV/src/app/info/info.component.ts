import { Personne } from './../model/personne';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LsPersonnesService } from '../ls-personnes.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  [x: string]: any;


pers: Personne | any;

  constructor(private ActivatedRouter: ActivatedRoute,
              private personServ: LsPersonnesService)  { }

  ngOnInit(): void {

  // const id = this.ActivatedRouter.snapshot.params.id;
  // this.pers = this.personServ.getPersonneById('id');

    this.ActivatedRouter.paramMap.subscribe(
      (p: ParamMap) => {

        this.pers = this.personServ.getPersonneById(p.get('id'));

      },
      (error) => {
        console.log(error);
      },
    );

  // deleteThisPerson(){}
  // goToUpdate(){}

}


}

