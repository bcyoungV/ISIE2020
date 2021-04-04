import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {

  listFonts = ['Arial black', 'Garamond', 'Impact', 'Arial', 'Calibri'];
  bgColor: string;
  color: string;
  size: string;
  font: string;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeSize(newSize: { value: string; }){
    console.log(newSize.value);

    this.size = newSize.value + 'px';
  }

}
