import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInnerExpandMenu]'
})
export class ExpandInnerMenuDirective {

  constructor() { }
  // @HostBinding(‘class.active’) isOpen = false;
  // @HostListener(‘click’) toggleOpen($event){
  // this.isOpen = !this.isOpen;
  // }
  // ishovering = false;
  @HostBinding('class.active') ishovering: boolean = false;
  @HostListener('click')
  onclick() {
    this.ishovering = !this.ishovering;
  }
}
