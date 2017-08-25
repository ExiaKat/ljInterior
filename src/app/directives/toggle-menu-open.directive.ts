import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleMenuOpen]'
})
export class ToggleMenuOpenDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') onToggleMenu(){
    this.isOpen = !this.isOpen;
  }
}
