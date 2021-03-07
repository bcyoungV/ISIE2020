import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
@HostBinding('style.backgroundColor') bg = 'white';

@HostBinding('style.Color') color = 'black';
  constructor() { }

  @HostListener('mouseenter') mouseenter(){
    this.bg = 'brown';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(){
    this.bg = 'white';
    this.color = 'black';
  }

}
