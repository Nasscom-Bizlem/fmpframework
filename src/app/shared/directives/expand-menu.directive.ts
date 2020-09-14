import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appExpandMenu]'
})
export class ExpandMenuDirective {

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
