import { Component, Input, OnInit } from '@angular/core';
import { LsRecruesService } from '../ls-recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
<<<<<<< HEAD
  @Input() personne!: Personne;
=======
  @Input()
  personne!: Personne;
>>>>>>> f48bd1f24bc3b7cd872bf8b257987f5a14601705
  constructor(private recrueService: LsRecruesService) { }

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

}
