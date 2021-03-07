import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
@HostBinding('style.backgroundColor') bg = 'white';

@HostBinding('style.Color') color = 'black';
  constructor() { }

  // tslint:disable-next-line:typedef
  @HostListener('mouseenter') mouseenter(){
    this.bg = 'grey';
    this.color = 'white';
  }

  // tslint:disable-next-line:typedef
  @HostListener('mouseleave') mouseleave(){
    this.bg = 'white';
    this.color = 'black';
  }


}
