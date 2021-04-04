import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { LsRecruesService } from '../ls-recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne!: Personne;
  constructor(private recrueService: LsRecruesService, private router: Router) { }

  ngOnInit(): void {
  }


  addRecrue(){
    if (this.recrueService.verifyRecrue(this.personne)) {
    alert('Cette personne a déjà été recrutée!');
    }
    else {
    this.recrueService.addRecrue(this.personne);
    }
    console.log(this.recrueService.getLsRecrues());
  }
  goToInfos(){

    this.router.navigate(['cv', this.personne.id]);



  }

}
