import { Component, OnInit } from '@angular/core';
import { LsRecruesService } from '../ls-recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recrue',
  templateUrl: './recrue.component.html',
  styleUrls: ['./recrue.component.css']
})
export class RecrueComponent implements OnInit {
AllRecrues: Personne[] = [];
  constructor(private recrueService: LsRecruesService) { }

  ngOnInit(): void {
    this.AllRecrues = this.recrueService.getLsRecrues();
  }

}
