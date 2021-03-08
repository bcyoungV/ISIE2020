import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bruno',
  templateUrl: './bruno.component.html',
  styleUrls: ['./bruno.component.css']
})
export class BrunoComponent implements OnInit {

  hd = false;
  color = 'pink';
  name = 'Mr Bruno';

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  showalert(){
    alert('le button a eté clické.');
  }
  // tslint:disable-next-line:typedef
  hide(){
    this.hd = !this.hd;
  }

}
